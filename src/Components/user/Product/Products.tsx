import React, { useState } from 'react'
import { ProductModel } from '../../../api/data-contracts';
import { useNavigate } from 'react-router-dom';
import { Photo } from '../../common/Photo';
import ItemSizeSlider from '../../common/ItemSizeSlider';


export const Products = ({productsList}: {productsList: ProductModel[] }) => {
    const navigate = useNavigate();

    const [itemSize, setItemSize] = useState(2); // Начальное состояние, где 2 итема помещаются в ряд

    // размеры итемов
    const getItemWidth = () => {
        switch (itemSize) {
        case 1:
            return 'w-full';
        case 2:
            return 'w-1/2';
        case 3:
            return 'w-1/3';
        default:
            return 'w-1/2';
        }
    };

    return (
        <div>
            <ItemSizeSlider onChange={setItemSize} />
            <div className='w-full sm:w-1/4 flex flex-wrap justify-between p-1'>
                {productsList.map(prod => {
                    return <div 
                                key={prod.guid} 
                                className={`${getItemWidth()} m-0 p-1 flex flex-col items-center justify-around`} 
                                onClick={() => navigate(`.././product/${prod.guid}`)}
                            >
                                <Photo id={prod.mainPhotoGuid || ''} styles={''} alt={'фото'} />
                                <p className='text-center'>{prod.name}</p>
                            </div>
                })}
            </div>
        </div>
    );
};
