import React, { useEffect, useState } from 'react'
import useApi from './useApi';
import { CreateFavoriteModel, FavoriteModel, FavoriteModelDataResult } from '../api/data-contracts';
import { retrieve } from '../utils/encryption';


interface Favorites {
    sendData: boolean,
    setSendData: React.Dispatch<React.SetStateAction<boolean>>, 
    mode: 'check' | 'create' | 'delete',
    userGuid?: string,
    prodGuid?: string,
    id?: string
};

export const useFavorites = (
    {sendData, setSendData, mode, userGuid, prodGuid, id}: Favorites
) => {
    const [endPoint, setEndPoint] = useState<'favoritesList' | 'favoritesCreate' | 'favoritesDelete'>('favoritesList');
    const [params, setParams] = useState<
    {
        UserGuid?: string,
        ProductGuid?: string;
    } |
    CreateFavoriteModel |
    string
    >({});
    const config = { headers: { Authorization: `Bearer ${retrieve('token')}` } };

    useEffect(() => {
        switch(mode) {
            case 'check':
                setEndPoint('favoritesList');
                setParams({
                    UserGuid: userGuid,
                    ProductGuid: prodGuid
                });
                break
            case 'create':
                setEndPoint('favoritesCreate');
                setParams({
                    UserGuid: userGuid,
                    ProductGuid: prodGuid
                })
                break
            case 'delete':
                setEndPoint('favoritesDelete');
                if(id) setParams(id);
                break
        };

    }, [mode, userGuid, prodGuid, id]);


    const [data, isLoading, error] = useApi(
        endPoint,
        params,
        config,
        sendData
    );

    useEffect(() => {
        if(isLoading) setSendData(false);
    }, [isLoading, setSendData]);

    const [favoritesList, setFavoritesList] = useState<FavoriteModel[]>();
    const [favorite, setFavorite] = useState<FavoriteModel>();
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    useEffect(() => {
        if(data && !error) {
            let res;
            switch(mode) {
                case 'check':
                    res = data as FavoriteModelDataResult;
                    setFavoritesList(res.data);
                    break
                case 'create':
                    res = data as FavoriteModel;
                    setFavorite(data);
                    break
                case 'delete':
                    setIsDeleted(true);
                    break
        }
        };
    }, [data, error, mode]);

    return {favoritesList, favorite, isDeleted};
};
