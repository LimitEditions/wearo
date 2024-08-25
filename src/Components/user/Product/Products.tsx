import React, { useState } from 'react'
import { ProductItemModel, ProductModel } from '../../../api/data-contracts';
import { useNavigate } from 'react-router-dom';
import { Photo } from '../../common/Photo';
import ItemSizeSlider from '../../common/ItemSizeSlider';
import { v4 as uuidv4 } from 'uuid';


export const Products = ({productsList}: {productsList: ProductModel[] | ProductItemModel[] }) => {
    const navigate = useNavigate();
    const [itemSize, setItemSize] = useState(2); // Начальное состояние, где 2 итема помещаются в ряд

    // размеры итемов
    const getItemWidth = () => {
        switch (itemSize) {
        case 1:
            return 'w-1/3 transition-all duration-1000 ease-in-out';
        case 2:
            return 'w-1/2 transition-all duration-1000 ease-in-out';
        case 3:
            return 'w-full transition-all duration-1000 ease-in-out';
        default:
            return 'w-1/2 transition-all duration-1000 ease-in-out';
        }
    };

    // проверка к какому типу относятся входящие данные
    const isProductItemModel = (product: ProductModel | ProductItemModel): product is ProductItemModel => {
        return (product as ProductItemModel).product !== undefined;
    };

    return (
        <div>
            <ItemSizeSlider onChange={setItemSize} defaultValue={2} maxValue={3}/>
            <div className='w-full flex flex-wrap justify-between p-1'>
                {productsList.map((prod) => {
                const isProductItem = isProductItemModel(prod);
                const product = isProductItem ? prod.product : prod as ProductModel;
                const color = isProductItem ? prod.productColorGuid : null;
                const endPoint = `/product/${product?.guid}`;
                
                return (
                    product && 
                    <div
                        key={uuidv4()}
                        className={`${getItemWidth()} m-0 p-1 flex flex-col items-center justify-around`}
                        onClick={() => navigate(endPoint, {
                            state: {
                                color,
                            }
                        })}
                    >
                        <Photo id={product?.mainPhotoGuid || ''} styles={''} alt={'фото'} />
                        <p className='text-center'>{product?.name}</p>
                    </div>
                );
                })}
            </div>
        </div>
    );
};
