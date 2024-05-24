import React from 'react'
import { ProductModel } from '../../api/data-contracts';
import { useNavigate } from 'react-router-dom';
import { Photo } from '../common/Photo';


export const Products = ({productsList}: {productsList: ProductModel[] }) => {
    const navigate = useNavigate();

    return (
        <div className='w-full sm:w-1/4 flex flex-wrap justify-between p-1'>
            {productsList.map(prod => {
                return <div key={prod.guid} className='w-1/2 m-0 p-1 flex flex-col items-center justify-around' onClick={() => navigate(`.././product/${prod.guid}`)}>
                            <Photo id={prod.mainPhotoGuid || ''} styles={''} alt={'фото'} />
                            <p className='text-center'>{prod.name}</p>
                        </div>
            })}
        </div>
    );
};
