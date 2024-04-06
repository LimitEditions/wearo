import React from 'react'
import getStyles from '../../utils/getStyles'
import { IButtonProps } from '../../types/interfaces/IButtonProps';

export const Button: React.FC<IButtonProps> = ({showButton, onClick, styles, text}) => {
  return (
    <>
      {showButton && (
        <button 
          onClick={onClick} 
          className={getStyles(styles)}> {text}
        </button>
      )}
    </>
  );
};
