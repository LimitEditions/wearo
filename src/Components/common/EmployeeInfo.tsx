import React from 'react'
import { IEmployeeInfoProps } from '../../types/interfaces/componentsProps/IEmployeeInfoProps'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { ArrowLeftSvg } from './ArrowLeftSvg';

export const EmployeeInfo = ({title, needArrow, value, onClick}: IEmployeeInfoProps) => {
  return (
    <div className={getStyles(containerStyle)} onClick={onClick}>
      <div>
        <h3 className={getStyles(h3Style)} >{title}</h3>
        {value ? <span className={getStyles(spanStyle)}>{value}</span> : <span className={getStyles(spanStyle)}>Данные не указаны</span>}
      </div>
      {needArrow && <ArrowLeftSvg />}
    </div>
  )
}

const containerStyle: BlockStyle = {
    blockSize: "w-full",
    background: "bg-gray-100",
    spacing: "px-2 py-4",
    border: "border-t border-gray-200",
    container: "flex justify-between",
  };
  
  const h3Style: BlockStyle = {
      text: 'text-xs font-normal'
  }
  
  const spanStyle: BlockStyle = {
      text: 'font-normal text-sm'
  }
