import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BrandModel } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { Photos } from './Photos';
import { Button } from '../common/Button';
import { BlockStyle } from '../../types/interfaces/IStyles';
import ProfileItem from './ProfileItem';
import { Info } from '../common/Info';
import getStyles from '../../utils/getStyles';
import { Tips } from './Tips';

export const Brand = () => {
  const {id} = useParams();
  const [shouldExecute, setShouldExecute] = useState<boolean>(false);

  const [data, isLoading, error] = useApi<'brandsDetail', BrandModel>(
    'brandsDetail', id, {}, shouldExecute
  );
  
  useEffect(() => {
    setShouldExecute(false);
    id ? setShouldExecute(true): console.log('Передайте id в url')

  }, [shouldExecute, id])


  return (
    <div className='space-y-7 w-full sm:w-1/4'>
      <Info showInfo={isLoading} msg='Загружаю...' style={getStyles(infoStyle)}/>
      <Photos photos={undefined} imgSize='w-full'/>
      <div className='flex justify-between p-4'>
        <span>{data?.name}</span>
        <Button showButton={true} styles={btnStyle}>Подписаться</Button>
      </div>
      <div className='m-2'>{data?.description}</div>
      <div>
        <ProfileItem path='/collections'>Коллекции</ProfileItem>
        <ProfileItem path='/items'>Изделия</ProfileItem>
      </div>
      <Tips tips={[]} />
      <div>Публикации</div>
    </div>
  )
}


const btnStyle: BlockStyle = {
  border: ''
};

const infoStyle: BlockStyle = {
  text: 'text-green-700'
};
