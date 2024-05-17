import React from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles'

// Стрелка
export const Arrow = ( { direct }: {direct: 'right' | 'left'} ) => {
    const src = direct === 'right'? '/images/arrowRight.png': '/images/arrowLeft.png';

return (
    <div className={getStyles(divStyle)}>
        <img src={src} alt='Стрелка'/>
    </div>
    );
};

const divStyle: BlockStyle = {
    container: 'self-center'
};
