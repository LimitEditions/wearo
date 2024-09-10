import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { UpdateUserModel, UserModel } from '../api/data-contracts'
import AuthContext from '../context/AuthProvider';
import useApi from './useApi';
import { retrieve } from '../utils/encryption';
import useAuth from './useAuth';


export const useUserUpdate = (
    updateData: UpdateUserModel, 
    sendData: boolean, 
    setSendData: React.Dispatch<React.SetStateAction<boolean>>,
    userData?: UserModel
) => {
    const { isAuth } = useContext(AuthContext);
    const [updateContext, setUpdateContext] = useState<boolean>(false)
    useAuth(updateContext);
    const [params, setParams] = useState<UpdateUserModel | null>(null);

    const getUpdatedParams = useCallback((): UpdateUserModel => {
        // Фильтруем isAuth, чтобы исключить поле "status"
        const filteredIsAuth = Object.fromEntries(
            Object.entries(isAuth).filter(([key]) => key !== 'status')
        );
        const baseData = userData ?
            userData:
            filteredIsAuth;

        // Объединяем данные из data и filteredIsAuth
        const updatedParams: UpdateUserModel = {
            ...baseData,
            ...updateData,
        };

        return updatedParams;
    }, [isAuth, updateData, userData]);

    const token = useMemo(() => retrieve("token"), []);
    const [data, isLoading, error] = useApi(
        'usersUpdate',
        params,
        { headers: { Authorization: `Bearer ${token}` } },
        !!params && sendData
    );

    useEffect(() => {
        if (sendData) {
            setParams(getUpdatedParams());
        }
    }, [sendData, getUpdatedParams])

    useEffect(() => {
        if (isLoading) {
            setSendData(false);
            setUpdateContext(true);
        };
    }, [isLoading, setSendData]);

    return [data, error];
};
