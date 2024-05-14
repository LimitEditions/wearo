import React from 'react';
import { ProductModel, TipModel } from '../../api/data-contracts';
import { Button } from '../common/Button';
import ProfileItem from './ProfileItem';
import { Tips } from './Tips';
import { Photos } from './Photos';
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import moment from 'moment';
import { Colors } from './Colors';


export const Product = ({ data }:{ data: ProductModel }) => {
  return (
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
          <ProfileItem path={`./../collection/${data.collectionGuid}`}>Коллекция</ProfileItem>
          <ProfileItem path='/buy_item'>Купить изделие</ProfileItem>
        </div>
        <Button showButton={true}>Оставить отзыв</Button>
      </>
  );
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
