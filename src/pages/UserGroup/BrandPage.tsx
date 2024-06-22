import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { BrandModel } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { Brand } from '../../Components/user/Brand';
import { CollectionPage } from './CollectionPage';
import { ProductsPage } from './ProductsPage';


export const BrandPage = () => {
    // id бренда
    const { id } = useParams();
    // загрузка данных по бренду с сервера
    const [data, isLoading, error] = useApi<'brandsDetail', BrandModel>(
        'brandsDetail', id, {}, true
    );

    return (
        <Routes>
            <Route index element={
                <div className='space-y-5 w-full px-3'>
                    <IsLoading show={isLoading} />
                    <ErrorReq show={!!error} error={error} />
                    {data && <Brand brandInfo={data}/> }
                </div>
            }/>
            <Route path='/collection/:id' element={<CollectionPage />} />
            <Route path='/products/:id' element={<ProductsPage />} />
        </Routes>
    )
};
