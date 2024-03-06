import { useState, useEffect } from "react";
import { Api } from '../api/Api.ts';
// import { FullRequestParams } from "../api/http-client.ts";

// const api = new Api({ baseURL: process.env.REACT_APP_BASE_URL});

const useApi = (method: keyof Api, options: []): [any, boolean, any] => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        setIsLoading(true);
        setData(null);
        setError(null);
        const response = async () => {
            try {
                // const result = await api[method](options)
                // if (!cancelled) setData(result.data);
            } catch(e: any) {
                if (!cancelled) setError(e);
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        }  
        
        response();

        return () => {
            cancelled = true;
        };
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [method]);

    return [data, isLoading, error];
};

export default useApi;
