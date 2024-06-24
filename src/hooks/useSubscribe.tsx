import { useEffect, useState } from "react";
import { retrieve } from "../utils/encryption";
import useApi from "./useApi";
import { SubscriptionModelDataResult } from "../api/data-contracts";


const useSubscribe = (id: string): [boolean, () => void] => {
    // стейт на конфиг для всех запросов ниже (токен) и стейт на id пользователя
    const [config, setConfig] = useState<{} | null>(null);
    const [userGuid, setUserGuid] = useState<string | null>(null);

    // асинхронное присвоение значение для стейтов выше
    useEffect(() => {
        const fetchTokenAndGuid = async () => {
            const fetchedToken = await retrieve("token");
            const fetchedUserGuid = await retrieve("guid");
            if (fetchedToken && fetchedUserGuid) {
                setUserGuid(fetchedUserGuid);
                setConfig({ headers: { Authorization: `Bearer ${fetchedToken}` } });
            };
        };
        fetchTokenAndGuid();
    }, [])

    // стейт на флаг отправки запроса, относится ко всем трем запросам
    const [execute, setExecute] = useState<'check' | 'sub' | 'unSub' | null>(null);

    // Проверяем подписан юзер или нет
    const [isSubscribe, loadListSubs, ] = useApi<'subscriptionsList', SubscriptionModelDataResult>(
        'subscriptionsList',
        { userGuid: userGuid },
        config,
        execute === 'check'
    );
    
    // асинхронно запускаем запрос по проверке
    useEffect(() => {
        if (config && userGuid) {
            setExecute('check');
        };
    }, [config, userGuid]);

    // и останавливаем этот запрос
    useEffect(() => {
        if(loadListSubs) {
            setExecute(null);
        };
    }, [loadListSubs]);
    
    // После получения данных о подписке и фильтрации условной заносим их в соответствующие стейты
    const [subscriptionId, setSubscriptionId] = useState<string>('');
    useEffect(() => {
        if (isSubscribe) {
            const foundElement = isSubscribe.data?.find(el => el.brandGuid === id);
            if (foundElement) {
                setSubscriptionId(foundElement.guid as string);
            };
        };
    }, [isSubscribe, id]);

    // стейт на статус подписки, передаем из хука для отображения соответствующей информации
    const [subStatus, setSubStatus] = useState<boolean>(false);
    useEffect(() => {
        setSubStatus(subscriptionId !== '');
    }, [subscriptionId]);
    
    // Подписка/отписка - стейты на названия методов и параметры
    const [method, setMethod] = useState<'subscriptionsCreate' | 'subscriptionsDelete'>('subscriptionsCreate');
    const [apiParams, setApiParams] = useState<{} | string>();
    const [, isLoading, ] = useApi(
        method,
        apiParams,
        config,
        execute === 'sub' || execute === 'unSub'
    );

    // асинхронно меняем параметры запроса в зависимости от кейса, сбрасываем номер подписки при отписке
    useEffect(() => {
        if (subStatus) {
            setApiParams( subscriptionId );
        } else {
            setApiParams({ userGuid: userGuid, brandGuid: id });
        };
    }, [subStatus, subscriptionId, userGuid, id]);

    // колбек на запуск соответвующего метода, делаем с небольшой задержкой для того, чтобы параметры нужные встали перед отправкой
    const handlerSub = () => {
        const timer = setTimeout(() => {
            if(subStatus) {
                setMethod('subscriptionsDelete');
                if (subscriptionId) setExecute('unSub');
            } else {
                setMethod('subscriptionsCreate');
                setExecute('sub');
            };
        }, 100);
        return () => clearTimeout(timer);
    };

    // асинхронно сбрасываем флаг отправки данных по подписке и запрашиваем очередной перечень подписок
    useEffect(() => {
        if (isLoading && (method === 'subscriptionsCreate' || 'subscriptionsDelete')) {
            setExecute('check');
            switch(method){
                case 'subscriptionsCreate':
                    setSubStatus(true);
                    if(subscriptionId) setApiParams(subscriptionId);
                    break
                case 'subscriptionsDelete':
                    setSubStatus(false);
                    setSubscriptionId('');
                    setApiParams({ userGuid: userGuid, brandGuid: id });
                    break
            };
        };
    }, [isLoading, method, subscriptionId, userGuid, id]);
    return [subStatus, handlerSub];
};

export default useSubscribe;
