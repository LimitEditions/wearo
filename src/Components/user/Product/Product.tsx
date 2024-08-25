import React, { useEffect, useState } from 'react';
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
    const [isLike, setIsLike] = useState<'like' | 'unlike' | null>(null);
    const [favGuid, setFavGuid] = useState<string>('');
    useEffect(() => {
        if(favGuid) setIsLike('like');
    }, [favGuid]);
    
    const [checkList, setCheckList] = useState<boolean>(false);
    useEffect(() => {
        if(data.guid !== '') {
            setCheckList(true);
        };
    }, [data.guid]);

    const { favoritesList } = useFavorites({
        sendData: checkList,
        setSendData: setCheckList,
        mode: 'check',
        prodGuid: data.guid
    });

    useEffect(() => {
        // console.log(favoritesList?.filter(fav => !fav.isDeleted))
        favoritesList?.forEach(fav => {
            if(fav.productGuid === data.guid && !fav.isDeleted) {
                setFavGuid(fav.guid || '');
            };
        });
    }, [favoritesList, data.guid])

    const [add, setAdd] = useState<boolean>(false);
    useEffect(() => {
        if(isLike === 'like' && !favGuid) {
            setAdd(true);
        };
    }, [isLike, favGuid]);

    const { favoriteGuid } = useFavorites({
        sendData: add,
        setSendData: setAdd,
        mode: 'create',
        userGuid: retrieve('guid'),
        prodGuid: data.guid
    });
    useEffect(() => {
        if(favoriteGuid) setFavGuid(favoriteGuid);
    }, [favoriteGuid]);
    
    const [del, setDel] = useState<boolean>(false);
    useEffect(() => {
        if(isLike === 'unlike' && favGuid) {
            setDel(true);
        };
    }, [isLike, favGuid]);

    const { isDeleted } = useFavorites({
        sendData: del,
        setSendData: setDel,
        mode: 'delete',
        id: favGuid
    });
    // console.log(isDeleted)

    return (
        <>
            <Photos photos={data?.photos || null} />
            <div className='flex item-center justify-between'>
                <div>{data.name}</div>
                <div onClick={() => setIsLike((prevState) => { return prevState === 'like' ? 'unlike': 'like' })}>
                    {isLike === 'like' ?
                    <img src="/images/hearts/blue_heart_small.png" alt="значек лайка, прожатый" />:
                    <img src="/images/hearts/white_heart_small.png" alt="значек лайка, не прожатый" />}
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
