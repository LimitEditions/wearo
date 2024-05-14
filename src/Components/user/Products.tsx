import React from 'react'
import { ProductModel } from '../../api/data-contracts';
import { useNavigate } from 'react-router-dom';


export const Products = ({productsList}: {productsList: ProductModel[] }) => {
    const navigate = useNavigate();

    return (
        <div className='w-full sm:w-1/4 flex flex-wrap justify-between p-1'>
            {productsList.map(prod => {
                return <div key={prod.guid} className='w-1/2 m-0 p-1' onClick={() => navigate(`.././product/${prod.guid}`)}>
                            <img src='https://via.placeholder.com/150?text=1' alt='something' className='w-full'/>
                            <p className='text-center'>{prod.name}</p>
                        </div>
            })}
        </div>
    );
};
