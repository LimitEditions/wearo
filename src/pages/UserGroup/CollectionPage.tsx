import React, { useEffect, useState } from 'react'
import { ClothingCollectionModel, ProductModel } from '../../api/data-contracts'
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi';
import { Products } from '../../Components/user/Product/Products';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import useFilter from '../../hooks/useFilter';
import { Search } from '../../Components/common/SearchGroup/Search';


export const CollectionPage = () => {
    const { id } = useParams();
    const [data, isLoading, ] = useApi<'clothingCollectionsDetail', ClothingCollectionModel>(
        'clothingCollectionsDetail', id, {}, true
    );

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        setProducts(data?.products as ProductModel[]);
    }, [data]);

    // фильтрация списка
    const [filteredList, setFilteredList] = useState<ProductModel[] | null>(null);
    const { filteredData, setSearchTarget } = useFilter(products);
    
    useEffect(() => {
        if(filteredData) {
            setFilteredList(filteredData);
        } else {
            setFilteredList(null);
        };
    }, [filteredData])

    return (
        <div className='flex-col justify-center items-center px-1 space-y-7'>
            <IsLoading show={isLoading} />
            <h1 className='text-center'>{data?.name}</h1>
            <p>{data?.description}</p>
            <Search callBack={setSearchTarget}/>
            <Products productsList={filteredList ? filteredList: products || []}/>
        </div>
    )
};
