import React from 'react';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { IButtonProps } from '../../types/interfaces/IButtonProps';

export const Button: React.FC<IButtonProps> = ({ showButton, text, link, onClick, type = 'button', styles }) => {
  return (
    <>
      {showButton && (
      <button
      className={styles ? getStyles(styles) : getStyles(buttonStyle)}
      onClick={onClick}
      type={type}
    >
      {text ? text : link}
    </button> 
    )} 
    </>
  );
};

const buttonStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-gray-500",
  spacing: 'p-2',
  text: 'text-white',
  border: 'rounded-3xl'
};