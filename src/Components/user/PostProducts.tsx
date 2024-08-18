import React from 'react'
import { useLocation } from 'react-router-dom';
import { ProductMini } from './Product/ProductMini';

export const PostProducts = () => {
    const location = useLocation();
    const { prodsData } = location.state;

    return (
        <div className='flex items-center justify-between'>
            {prodsData.map((prod: string) => {
                return <ProductMini id={prod || ''} key={prod}/>
            })}
        </div>
    );
};
