import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { ProductModel, ProductModelDataResult } from '../api/data-contracts';
import useApi from '../hooks/useApi';
import { Profile } from '../Components/user/Profile';
import Product from '../Components/user/Product';
import { Wardrobe } from '../Components/user/Wardrobe';

export const WardrobePage = () => {
    const info = useAuth();

    const [productsList, setProductsList] = useState<ProductModel[] | []>([]);
    const [data, isLoading, error] = useApi<'productsList', ProductModelDataResult>(
      'productsList', {}, {}, true
    );

    useEffect(() => {

        if(data && !error) {
          setProductsList(data.data || [])
        };
        
      }, [data, error, productsList])

    return (
        <>
            <Routes>
            <Route index element={<Wardrobe productsList={ productsList }/>} />
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/product/:id/' element={<Product />} />
            <Route path='/product/:id/comments' element={<>Комментарии</>} />
            <Route path='/product/:id/collection' element={<>Коллекция</>} />
            <Route path='/product/:id/buy_item' element={<>Покупка изделия</>} />
            </Routes>
        </>
    );
};
