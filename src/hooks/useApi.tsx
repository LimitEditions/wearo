import { useState, useEffect, useMemo } from "react";
import { Api } from '../api/Api';
import { IApiResponse } from '../types/interfaces/ApiResponses/IApiResponse';
import { IApiError } from "../types/interfaces/IApiError";
import axios, { AxiosResponse, Method } from "axios";
import { retrieve } from "../utils/encryption";
import { useNavigate } from "react-router-dom";
const api = new Api({ baseURL: process.env.REACT_APP_URL_REQUEST });

const useApi = <T extends keyof Api, Data >(
  method: T, 
  params?: any, 
  config?: any,
  execute: boolean = false // Флаг выполннеия запроса, по умолчанию false
): [Data | null, boolean, IApiError | null] => {
    const navigator = useNavigate();
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
                            if (e.response?.status === 401) {
                                navigator('/auth')
                            }
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

type Body = Record<string, unknown> | FormData | string | number;
type Params = {
    headers?: Record<string, string | number>,
    [x : string] : unknown
};
type Config = {
    token ?: boolean // Необходимо ли подставить токен авторизации
    immediate ?: boolean // При объявление хука, запустит запрос. 
    params?: Params,
    body?: Body,
    skipAuthCheck?: boolean // Если true, не будет переадрисовывать на страницу авторизацииы
}

const buildParams = (params: Params, config: Config): Params => {
    if (config.token) {
        const token = retrieve("token");

        if (params.headers) {
            params.headers.Authorization = `Bearer ${token}`;
        } else {
            params.headers = { Authorization: `Bearer ${token}` } 
        }
    }

    return params;
}

// function useAsyncState(execute: ((...args: any[]) => Promise<any>), config: Config) {
//     const [data, setData] = useState<any>(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<any>(null);

//     const worker = async (body: Body) => {
//         setIsLoading(true);
//         setError(null);
//         try {
//             const res = await execute(body);
//             setData(res);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     useEffect(() => {
//         if (config.immediate !== false) {
//             if (!config.body) {
//                  console.warn('Вы не передали body');
//             } else {
//                  worker(config.body);
//             }
//         }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])

//     return { data, error, isLoading, execute: worker };
// }

export function useApiNew<Answer>(method: keyof Api, config: Config = {}){
    const navigator = useNavigate();
    const [data, setData] = useState<Answer | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<IApiError | null>(null);

    const localParams: Params = config.params ?? {};

    const execute = async (body: Body) => {
        const request = api[method] as (...args: any[]) => Promise<any>;
        const _params = buildParams(localParams, config);

        if (request) {
            setIsLoading(true);
            setError(null);

            try {
                const res = await request(body, _params);
                setData(res.data);
            } catch (error) {
                if(axios.isAxiosError(error)){
                    if (config.skipAuthCheck) {
                        if (error.response?.status === 401) {
                            try {
                                navigator('/auth')
                            } catch (e) {
                                console.warn('')
                            }
                        }
                    }
                    setError({
                        code: error.code,
                        message: error.message,
                        status: error.response?.status,
                    });
                } else {
                    setError({error: error});
                };
            } finally {
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        if (config.immediate !== false) {
            if (!config.body) {
                console.warn('Вы не передали body');
            } else {
                execute(config.body);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        data,
        isLoading,
        error,
        execute
    }
};