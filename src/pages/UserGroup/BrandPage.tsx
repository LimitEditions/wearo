import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BrandModel, SubscriptionModel } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { Button } from '../../Components/common/Button';
import { Tips } from '../../Components/user/Tips';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import Item from '../../Components/user/ProfileItem';
import { Photo } from '../../Components/common/Photo';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { retrieve } from '../../utils/encryption';
import { Modal } from '../../Components/common/Modal';
import { SuccessfulContent } from '../../Components/common/SuccessfulContent';


export const BrandPage = () => {
    // id бренда
    const { id } = useParams();
    // загрузка данных по бренду с сервера
    const [data, isLoading, error] = useApi<'brandsDetail', BrandModel>(
        'brandsDetail', id, {}, true
    );

    // подписаться на бренд
    const userGuid = useMemo(() => retrieve("guid"), []);
    const token = useMemo(() => retrieve("token"), []);
    const [shouldExecute, setShouldExecute] = useState<boolean>(false);
    const [subscription, subscriptionLoading, subscriptionError] = useApi<'subscriptionsCreate', SubscriptionModel>(
        'subscriptionsCreate',
        { userGuid: userGuid, brandGuid: id },
        { headers: { Authorization: `Bearer ${token}` } },
        shouldExecute
    );

    // стейт на модальное окно
    const [modal, setModal] = useState<boolean>(false);

    // эффекты
    useEffect(() => {
        // останавливаем запрос по подписке после единичной попытки
        if(subscriptionLoading) {
            setShouldExecute(false);
            // всплывает окно об успехе/неудаче
            setModal(true);
        };
        // таймер на закрытие окна
        if(modal) {
            setTimeout(() => {
                setModal(false);
            }, 2000)
        };
    }, [subscriptionLoading, modal]);

    return (
        <div className='space-y-5 w-full px-3'>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error} />
            {data &&
                <>
                    <Photo id={data?.photo || null} styles={'border-4'} alt={'фото бренда'}/>
                    <div className='flex justify-between '>
                        <Link to={`${data.link}`}>{data?.name}</Link>
                        <Button showButton={true} styles={cursorStyle} onClick={() => setShouldExecute(true)}>Подписаться</Button>
                    </div>
                    <div className='text-center'>
                        {data?.description}
                    </div>
                    <div>
                        <Item path='/collections'>Коллекции</Item>
                        <Item path='/items'>Изделия</Item>
                    </div>
                    <Tips tips={[]} />
                    <div>
                        Публикации
                    </div>
                </>
            }
            <Modal isOpen={modal} setIsOpen={setModal} swipeable={false}>
                <SuccessfulContent message={subscription && !subscriptionError ? 'Вы успешно подписаны': `Ошибка - ${subscriptionError?.message}`}/>
            </Modal>
        </div>
    )
};


const cursorStyle: BlockStyle = {
    hover: 'cursor-pointer'
};
