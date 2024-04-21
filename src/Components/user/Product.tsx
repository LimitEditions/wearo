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


const Product = () => {
  const { id } = useParams()
  const [data, isLoading, error] = useApi<'productsDetail', ProductModel>(
    'productsDetail', id, {}, true
  );


  return (
    <div className={getStyles(containerStyle)}>
      <Info showInfo={isLoading} msg='Загружаю...' style={getStyles(infoStyle)}/>
      <Info showInfo={error ? true: false} msg='Ошибка!' style={getStyles(errorStyle)}/>
      {data &&
      <>
      <div>
        <span>{data?.brand?.name}</span>
        <span>{data?.brand?.photo}</span>
      </div>
      <Photos photos={data?.photos} />
      <div>Оригинальность</div>
      <div className={getStyles(descStyle)}>
        <span className='block'>{data?.description}</span>
        {data?.colors?.map(color => (
          <span key={color.guid} className={getStyles(colorStyle)}>
            {color.color?.name}
            <span className={`${getStyles(colorCircleStyle)} bg-[#${color.color?.hex}]`}></span>
          </span>
        ))}
      </div>
      <div className={getStyles(originStyle)}>
        Происхождение
      </div>
      <div className={getStyles(compositionStyle)}>
        <h3>Состав ткани:</h3>
        {data?.composition?.map(material => (
          <span key={material.guid} className={getStyles(materialStyle)}>{material.material?.name} {material.share} %</span>
        ))}
      </div>
      <Tips tips={data?.tips as TipModel[]}/>
      <div>
        Дата сканирования: 
        <span> {data?.createDT ? moment(data.createDT).format('DD.MM.YYYY') : 'Дата неизвестна'}</span>
      </div>
      <ProfileItem path='/comments'>Отзывы</ProfileItem>
      <ProfileItem path='/collection'>Коллекция</ProfileItem>
      <ProfileItem path='/buy_item'>Купить изделие</ProfileItem>
      <Button showButton={true}>Оставить отзыв</Button>
      </>}
      
    </div>
  );
};

export default Product;


const containerStyle: BlockStyle = {
  container: 'w-full sm:w-1/4',
  spacing: 'px-2 space-y-6',
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

const colorStyle: BlockStyle = {
  container: 'relative inline-block w-1/2 rounded-full',
  background: 'bg-[#f3f3f3]',
  spacing: 'p-2 mx-1'
};

const colorCircleStyle: BlockStyle = {
  container: 'absolute right-2 top-1/2 rounded-full w-4 h-4',
  transitionsAnimation: 'transform -translate-y-1/2'
};

const originStyle: BlockStyle = {
  text: 'font-semibold'
}

const compositionStyle: BlockStyle = {
  spacing: 'space-y-2'
}

const materialStyle: BlockStyle = {
  container: 'block'
}
