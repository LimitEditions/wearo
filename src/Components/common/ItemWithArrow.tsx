import React from 'react'
import { IItemWithArrowProps } from '../../types/interfaces/componentsProps/IItemWithArrowProps'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { ArrowRight } from './ArrowRight';

export const ItemWithArrow: React.FC<IItemWithArrowProps> = ({children, onClick}) => {
  return (
    <div className={getStyles(containerStyle)} onClick={onClick}>
      {children}
      <ArrowRight />
    </div>
  )
}

const containerStyle: BlockStyle = {
    blockSize: "w-full",
    background: "bg-gray-100",
    spacing: "px-2 py-4",
    border: "border-t border-gray-200",
    container: "flex justify-between",
    hover: 'cursor-pointer'
  };
