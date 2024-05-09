import React, { useEffect, useState } from 'react'
import { ClothingCollectionModel, ProductModel } from '../../api/data-contracts'
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi';
import { Products } from '../../Components/user/Products';
import { IsLoading } from '../../Components/common/IsLoading';


export const CollectionPage = () => {
  const { id } = useParams();
  const [data, isLoading, ] = useApi<'clothingCollectionsDetail', ClothingCollectionModel>(
    'clothingCollectionsDetail', id, {}, true
  );

  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    setProducts(data?.products as ProductModel[]);
  }, [data]);

  return (
    <div className='flex-col justify-center items-center px-1 space-y-7'>
      <IsLoading show={isLoading} />
      <h1 className='text-center'>{data?.name}</h1>
      <p>{data?.description}</p>
      <Products productsList={products || []}/>
    </div>
  )
};
