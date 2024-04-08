import React from 'react';
import { Link } from 'react-router-dom';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

export type Type = 'submit' | 'button';

interface Props {
  title?: string;
  link?: React.ReactNode;
  onClick?(): void;
  type?: Type;
}

export const Button = ({ title, link, onClick, type = 'button' }: Props) => {
  return (
    <button
      className={`${getStyles(containerStyle)}`}
      onClick={onClick}
      type={type}
    >
      {title ? title : link}
    </button>  
  );
};

const containerStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-gray-500",
  spacing: 'p-2',
  text: 'text-white',
  border: 'rounded-3xl'
};