import React from 'react'
import useApi from '../../../hooks/useApi';
import { ProductModel } from '../../../api/data-contracts';
import { Photo } from '../../common/Photo';
import { useNavigate } from 'react-router-dom';


export const ProductMini = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    const [data, , ] = useApi<'productsDetail', ProductModel>(
        'productsDetail', id, {}, true
    );
    return (
        <div className='w-48 h-48 m-1 p-1' onClick={() => navigate(`/product/${id}`)}>
            <Photo id={data?.mainPhotoGuid || ''} styles={'h-full mx-auto'} alt={'изображение продукта'}/>
            {/* <Photo id="d0290abb-4c63-46d9-b9b1-f7cc78013553" styles={'h-full mx-auto'} alt={'изображение продукта'}/> */}
        </div>
    );
};
