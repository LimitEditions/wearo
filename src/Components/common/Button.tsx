import React from 'react';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { IButtonProps } from '../../types/interfaces/componentsProps/IButtonProps';

export const Button: React.FC<IButtonProps> = ({ showButton, styles, children, ...props }) => {
  if (!showButton) { return null };

  return (
    <>
      <button className={styles ? getStyles(styles) : getStyles(buttonStyle)} {...props}>
        {children}
      </button> 
    </>
  );
};

const buttonStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-custom-blue hover:bg-navy-blue",
  spacing: 'p-3 m-auto',
  text: 'text-white text-md',
  border: 'rounded-full shadow-lg',
  transitionsAnimation: 'transition-all duration-300'
};

