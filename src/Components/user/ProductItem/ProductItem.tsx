import React from 'react';
import { ProductItemModel, ProductModel } from '../../../api/data-contracts';
import { Photos } from '../Photos';
import getStyles from '../../../utils/getStyles';
import { BlockStyle } from '../../../types/interfaces/IStyles';
import moment from 'moment';
import { Colors } from '../Colors';
import Item from '../../common/ItemGroup/Item';
import useApi from '../../../hooks/useApi';


export const ProductItem = ({ data }:{ data: ProductItemModel }) => {
    const [prodInfo, , ] = useApi<'productsDetail', ProductModel>(
        'productsDetail', data.productGuid, {}, true
    );

    return (
        <>
            <Photos photos={prodInfo?.photos || null} />
            <div>{prodInfo?.name}</div>
            <div>{prodInfo?.description}</div>
            <div className={getStyles(descStyle)}>
                <span className='block'>Изделие принадлежит пользователю {data.user?.username}</span>
                <Item path={`.././product/${data.productGuid}`}>Продукт</Item>
                <Item path={`.././user/${data.userGuid}`}>Пользователь</Item>
                <Item path={`./clothing_party/`}>Партия одежды</Item>
                {data.color && <Colors prodColors={[data.color]}/>}
            </div>
            
            <div>
                <p>Дата сканирования:</p> 
                <span> {data?.createDT ? moment(data.createDT).format('DD.MM.YYYY') : 'Дата неизвестна'}</span>
            </div>
        </>
    );
};

const descStyle: BlockStyle = {
    spacing: 'space-y-4'
};
