import React from 'react'
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';


export const Page404 = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-[calc(70vh-100px)] flex flex-col items-center justify-center'>
            <h1 className='uppercase text-red-700 animate-pulse'>Страница не найдена</h1>
            <img src={'/gifs/404.gif'} alt='404' />
            <Button 
                showButton={true} 
                className='w-1/2 mt-2 p-1 bg-custom-blue rounded-sm text-white-fon text-sm'
                onClick={() => navigate('/posts')}
            >
                Вернуться к ленте
            </Button>
        </div>
    );
};
