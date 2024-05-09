import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { ProductModel, ProductModelDataResult } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { Profile } from '../../Components/user/Profile';
import { Products } from '../../Components/user/Products';
import { IsLoading } from '../../Components/common/IsLoading';

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
            <Route index element={
              <div>
                Welcome to the Wardrobe!
                <IsLoading show={isLoading}/>
                <Products productsList={ productsList }/>
              </div>
            } />
            <Route path='/profile/*' element={<Profile />} />

          </Routes>
        </>
    );
};
