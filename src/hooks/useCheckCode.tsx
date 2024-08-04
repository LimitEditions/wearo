import React, { useEffect, useState } from 'react'
import useApi from './useApi';
import { ProductItemModel } from '../api/data-contracts';


// хук для проверки наличия изделия в БД
export const useCheckCode = (code: string, sendCode: boolean, setSendCode: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [status, setStatus] = useState<'success' | 'failure' | null>(null);
    const [data, isLoading, error] = useApi<'productItemsByCodeDetail', ProductItemModel>(
        'productItemsByCodeDetail',
        code,
        {},
        sendCode
    );
    
    useEffect(() => {
        if (code === '') setStatus(null);
    }, [code]);

    useEffect(() => {
        if(isLoading) {
            setSendCode(false);
        };
        if(data && !error) {
            setStatus('success');
        } else if (error) {
            setStatus('failure');
        };
    }, [data, isLoading, error, setStatus, setSendCode]);

    return status;
};
