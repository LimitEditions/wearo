import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { ProductModel, ProductModelDataResult } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { Products } from '../../Components/user/Products';
import { IsLoading } from '../../Components/common/IsLoading';
import { ProfilePage } from './ProfilePage';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { SearchInput } from '../../Components/common/SearchInput';
import { Button } from '../../Components/common/Button';

export const WardrobePage = () => {
    const info = useAuth();
    // console.log(info)

    // получение данных с сервера
    const [productsList, setProductsList] = useState<ProductModel[] | []>([]);
    const [data, isLoading, error] = useApi<'productsList', ProductModelDataResult>(
        'productsList', {}, {}, true
    );

    // логика фильтрации
    const [filteredList, setFilteredList] = useState<ProductModel[] | []>([]);
    const [showInput, setShowInput] = useState<boolean>(false);
    const handleSearchClick = () => {
        setShowInput(prevState => !prevState);
    };
    // колбек который передаем в инпут
    const searchProduct = (value: string) => {
        if(!value) setFilteredList([]);
        const regex = new RegExp(value, 'i');
        setFilteredList(productsList.filter(prod => prod.name?.match(regex)));
    };

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
                        <div className='relative h-12 w-full '>
                            <Button 
                                showButton={!showInput}
                                onClick={handleSearchClick}
                                styles={btnSearch}
                                >
                            </Button>
                            <SearchInput show={showInput} setShow={handleSearchClick} search={searchProduct}/>
                        </div>
                        <IsLoading show={isLoading}/>
                        <Products productsList={ filteredList.length > 0 ? filteredList: productsList }/>
                    </div>
                    } />
                <Route path='/profile/*' element={<ProfilePage />} />
            </Routes>
        </>
    );
};

const btnSearch: BlockStyle = {
    blockSize: "opacity-70 absolute",
    spacing: "right-2",
    background: "bg-[url('https://www.pngall.com/wp-content/uploads/15/Search-Bar-PNG.png')] bg-no-repeat bg-center bg-contain h-10 w-10"
};
