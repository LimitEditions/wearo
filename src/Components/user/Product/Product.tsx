import React, { useState } from 'react';
import { ProductModel, TipModel } from '../../../api/data-contracts';
import { Button } from '../../common/Button';
import { Tips } from '../Tips';
import { Photos } from '../Photos';
import getStyles from '../../../utils/getStyles';
import { BlockStyle } from '../../../types/interfaces/IStyles';
import { Colors } from '../Colors';
import Item from '../../common/ItemGroup/Item';
import { useFavorites } from '../../../hooks/useFavorites';
import { retrieve } from '../../../utils/encryption';


export const Product = ({ data, color, size }:{ data: ProductModel, color?: string, size?: string }) => {
    const [like, setLike] = useState<boolean>(false);
    const [sendData, setSendData] = useState<boolean>(false);
    // const { favoritesList } = useFavorites({
    //     sendData: sendData,
    //     setSendData: setSendData,
    //     mode: 'check',
    //     userGuid: retrieve('guid')
    // });

    // const { favorite } = useFavorites({
    //     sendData: sendData,
    //     setSendData: setSendData,
    //     mode: 'create',
    //     userGuid: retrieve('guid'),
    //     prodGuid: data.guid
    // });
    

    // const { isDeleted } = useFavorites({
    //     sendData: sendData,
    //     setSendData: setSendData,
    //     mode: 'delete',
    //     id: '6909cca7-6649-499a-ae9e-c8a696fa29e6'
    // });
    // console.log(isDeleted)

    return (
        <>
            <Photos photos={data?.photos || null} />
            <div>
                <div>{data.name}</div>
                <div onClick={() => setSendData(!sendData)}>
                {/* <div onClick={() => setLike(!like)}> */}
                    {like ?
                    <img src="/images/hearts/white_heart_small.png" alt="значек лайка, не прожатый" />:
                    <img src="/images/hearts/blue_heart_small.png" alt="значек лайка, прожатый" />}
                </div>
                
            </div>
            <div className={getStyles(descStyle)}>
                <span className='block'>{data?.description}</span>
                <Item path={`.././brand/${data.brandGuid}`}>Название бренда</Item>
                {data.colors && <Colors prodColors={data.colors} selectedColor={color}/>}
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
                <Item path='./comments'>Отзывы</Item>
                <Item path={`.././collection/${data.collectionGuid}`}>Коллекция</Item>
                <Item path='/buy_item'>Купить изделие</Item>
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
