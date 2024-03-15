import { useState, useEffect } from "react";
import { Api } from '../api/Api';
import { IApiResponse } from '../types/interfaces/ApiResponses/IApiResponse';



const api = new Api({ baseURL: 'http://vne.su:8081' });

const useApi = <T extends keyof Api, Data >(
  method: T, 
  params?: any, 
  config?: any,
  execute: boolean = false // Флаг выполннеия запроса, по умолчанию false
): [Data | null, boolean, any] => {
    const [data, setData] = useState<Data | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    // Использование JSON.stringify для стабилизации объектов 
    // Это необходимо для того, чтобы компонент не ререндерился бесконечное множество раз
    const paramsString = JSON.stringify(params);
    const configString = JSON.stringify(config);

    useEffect(() => {
        if (execute) { //Проверяем флаг
            let isMounted = true;
            setIsLoading(true);
            const fetchData = async () => {
                try {
                    const apiMethod = api[method] as unknown as (params: any, config?: any) => Promise<IApiResponse<Data>>;
                    // Парсим строки обратно в объекты для выполнения запроса
                    const result = await apiMethod(JSON.parse(paramsString), config ? JSON.parse(configString): undefined);
                    if (isMounted) {
                        setData(result.data);
                        setIsLoading(false);
                    }
                } catch (e) {
                    if (isMounted) {
                        setError(e);
                        setIsLoading(false);
                    }
                }
            };

            fetchData();

            // Очистка эффекта
            return () => {
                isMounted = false;
            };
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [method, paramsString, configString, execute]);

    return [data, isLoading, error];
};

export default useApi;