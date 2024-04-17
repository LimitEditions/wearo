import { useState, useEffect } from "react";
import { Api } from '../api/Api';
import { IApiResponse } from '../types/interfaces/ApiResponses/IApiResponse';
import { IApiError } from "../types/interfaces/IApiError";
import axios from "axios";


const api = new Api({ baseUrl: 'http://vne.su:8081' });

const useApi = <T extends keyof Api, Data >(
  method: T, 
  params?: any, 
  config?: any,
  execute: boolean = false // Флаг выполннеия запроса, по умолчанию false
): [Data | null, boolean, IApiError | null] => {
    const [data, setData] = useState<Data | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<IApiError | null>(null);

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
                    // Типизировать параметры и конфиг на данном этапе не представляется возможным из-за большого разнообразия методов
                    const apiMethod = api[method] as unknown as (paramsString?: any, configString?: any) => Promise<IApiResponse<Data>>;
                    // Парсим строки обратно в объекты для выполнения запроса
                    const result = await apiMethod(paramsString ? JSON.parse(paramsString): undefined, 
                                                   configString ? JSON.parse(configString): undefined);
                    if (isMounted) {
                        setData(result.data);
                        setError(null);
                    };
                } catch (e) {
                    if (isMounted) {
                        if(axios.isAxiosError(e)){
                            setError({
                                code: e.code,
                                message: e.message,
                                status: e.response?.status,
                            });
                        } else {
                            setError({error: e});
                        };
                    };
                } finally {
                    setIsLoading(false);
                };

                // Очистка эффекта
                return () => {
                    isMounted = false;
                };
            };

            fetchData();
        };
    }, [method, paramsString, configString, execute]);

    return [data, isLoading, error];
};

export default useApi;
