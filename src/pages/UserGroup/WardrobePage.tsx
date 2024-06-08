import React, { memo, useEffect, useMemo, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { ProductItemModel, ProductItemModelDataResult } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ProfilePage } from './ProfilePage';
import { ProductItems } from '../../Components/user/ProductItem/ProductItems';
import { retrieve } from '../../utils/encryption';


export const WardrobePage = memo(() => {
    const info = useAuth(true);
    const token = useMemo(() => retrieve("token"), []); 
    // console.log(info)

    // получение данных с сервера
    const [productsList, setProductsList] = useState<ProductItemModel[]>([]);
    const [data, isLoading, error] = useApi<'productItemsList', ProductItemModelDataResult>(
        'productItemsList',
        { UserGiud: info.guid },
        { headers: { Authorization: `Bearer ${token}` } },
        true
    );
    useEffect(() => {
        if(data && !error) {
            setProductsList(data.data || [])
        };
    }, [data, error, productsList])
    
    
    return (
        <>
            <Routes>
                <Route index element={
                    <div>
                        <p className='pt-2'>Welcome to the Wardrobe!</p>
                        <IsLoading show={isLoading}/>
                        <ProductItems productsList={ productsList || []}/>
                    </div>
                    } />
                <Route path='/profile/*' element={<ProfilePage />} />
            </Routes>
        </>
    );
});
