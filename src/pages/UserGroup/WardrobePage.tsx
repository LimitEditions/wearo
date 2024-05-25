import React, { memo, useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { ProductModel, ProductModelDataResult } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { Products } from '../../Components/user/Products';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ProfilePage } from './ProfilePage';
import { Search } from '../../Components/common/SearchGroup/Search';
import useFilter from '../../hooks/useFilter';


export const WardrobePage = memo(() => {
    const info = useAuth();
    // console.log(info)

    // получение данных с сервера
    const [productsList, setProductsList] = useState<ProductModel[] | []>([]);
    const [data, isLoading, error] = useApi<'productsList', ProductModelDataResult>(
        'productsList', {}, {}, true
    );
    useEffect(() => {
        if(data && !error) {
            setProductsList(data.data || [])
        };
    }, [data, error, productsList])
    
    // фильтрация списка
    const [filteredList, setFilteredList] = useState<ProductModel[] | null>(null);
    const { filteredData, setSearchTarget } = useFilter(productsList);
    useEffect(() => {
        if(filteredData) {
            setFilteredList(filteredData);
        } else {
            setFilteredList(null);
        };
    }, [filteredData])
    
    return (
        <>
            <Routes>
                <Route index element={
                    <div>
                        <p className='pt-2'>Welcome to the Wardrobe!</p>
                        <Search callBack={setSearchTarget}/>
                        <IsLoading show={isLoading}/>
                        <Products productsList={ filteredList ? filteredList: productsList }/>
                    </div>
                    } />
                <Route path='/profile/*' element={<ProfilePage />} />
            </Routes>
        </>
    );
});
