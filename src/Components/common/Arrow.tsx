import React from 'react'


// Стрелка
export const Arrow = ( { direct }: {direct: 'right' | 'left'} ) => {
    const src = direct === 'right'? '/images/arrowRight.png': '/images/arrowLeft.png';

return (
        <div className='self-center h-full'>
            <img src={src} alt='Стрелка'/>
        </div>
    );
};
