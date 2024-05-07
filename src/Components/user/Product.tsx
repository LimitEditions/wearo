import React from 'react';
import { ProductModel, TipModel } from '../../api/data-contracts';
import { Button } from '../common/Button';
import ProfileItem from './ProfileItem';
import { Tips } from './Tips';
import { Photos } from './Photos';
import { useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { Info } from '../common/Info';
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import moment from 'moment';
import { Colors } from './Colors';


const Product = () => {
  const { id } = useParams();
  const [data, isLoading, error] = useApi<'productsDetail', ProductModel>(
    'productsDetail', id, {}, true
  );
  
  
  return (
    <div className={getStyles(containerStyle)}>
      <Info showInfo={isLoading} msg='Загружаю...' style={getStyles(infoStyle)}/>
      <Info showInfo={error ? true: false} msg='Ошибка!' style={getStyles(errorStyle)}/>
      {data &&
      <>
        <Photos photos={data?.photos} />
        <div>{data.name}<span></span></div>
        <div className={getStyles(descStyle)}>
          <span className='block'>{data?.description}</span>
          <ProfileItem path={`./../brand/${data.brandGuid}`}>Название бренда</ProfileItem>
          {data.colors && <Colors prodColors={data.colors}/>}
        </div>
        <div className={getStyles(originStyle)}>
          Происхождение
        </div>
        <div className={getStyles(compositionStyle)}>
          <p>Состав ткани:</p>
          {data?.composition?.map(material => (
            <span key={material.guid} className={getStyles(materialStyle)}>{material.material?.name} {material.share} %</span>
          ))}
        </div>
        <Tips tips={data?.tips as TipModel[]}/>
        <div>
          <p>Дата сканирования:</p> 
          <span> {data?.createDT ? moment(data.createDT).format('DD.MM.YYYY') : 'Дата неизвестна'}</span>
        </div>
        <div>
          <ProfileItem path='/comments'>Отзывы</ProfileItem>
          <ProfileItem path='/collection'>Коллекция</ProfileItem>
          <ProfileItem path='/buy_item'>Купить изделие</ProfileItem>
        </div>
        <Button showButton={true}>Оставить отзыв</Button>
      </>}
    </div>
  );
};

export default Product;


const containerStyle: BlockStyle = {
  container: 'w-full sm:w-1/4',
  spacing: 'px-2 space-y-7',
};

const infoStyle: BlockStyle = {
  text: 'text-green-700'
};

const errorStyle: BlockStyle = {
  text: 'text-red-700'
};

const descStyle: BlockStyle = {
  spacing: 'space-y-4'
};

const originStyle: BlockStyle = {
  text: 'font-semibold'
}

const compositionStyle: BlockStyle = {
  spacing: 'space-y-2 space-x-3',
  text: 'text-sm'
}

const materialStyle: BlockStyle = {
  // container: 'block'
}
