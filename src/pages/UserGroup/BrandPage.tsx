import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BrandModel } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { Photos } from '../../Components/user/Photos';
import { Button } from '../../Components/common/Button';
import { Tips } from '../../Components/user/Tips';
import { IsLoading } from '../../Components/common/IsLoading';
import Item from '../../Components/user/ProfileItem';

export const BrandPage = () => {
  const {id} = useParams();
  const [shouldExecute, setShouldExecute] = useState<boolean>(false);

  const [data, isLoading, ] = useApi<'brandsDetail', BrandModel>(
    'brandsDetail', id, {}, shouldExecute
  );
  
  useEffect(() => {
    setShouldExecute(false);
    id ? setShouldExecute(true): console.log('Передайте id в url')

  }, [shouldExecute, id])


  return (
    <div className='space-y-7 w-full sm:w-1/4'>
      <IsLoading show={isLoading} />
      <Photos photos={undefined} imgSize='w-full'/>
      <div className='flex justify-between p-4'>
        <span>{data?.name}</span>
        <Button showButton={true}>Подписаться</Button>
      </div>
      <div className='m-2'>{data?.description}</div>
      <div>
        <Item path='/collections'>Коллекции</Item>
        <Item path='/items'>Изделия</Item>
      </div>
      <Tips tips={[]} />
      <div>Публикации</div>
    </div>
  )
}
