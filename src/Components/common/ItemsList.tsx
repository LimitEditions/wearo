import React from 'react'
import { IItemsListProps } from '../../types/interfaces/componentsProps/IItemsListProps'
import { ItemWithArrow } from './ItemWithArrow'
import { useNavigate } from 'react-router-dom';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

// Компонент для рендера списка элементов (название чего-то и стрелка вправо).
export const ItemsList: React.FC<IItemsListProps> = ({items}) => {
    const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className={getStyles(divStyle)}>
        {items.map((el) => {
        return <ItemWithArrow onClick={() => handleClick(el.path)} key={el.path}>
          <h2 className={getStyles(h2Style)}>{el.title}</h2>
        </ItemWithArrow>
      })}
    </div>
  )
}

const divStyle: BlockStyle = {
    blockSize: 'min-h-screen',
    background: "bg-gray-100"
  }
  
  const h2Style: BlockStyle = {
    text: 'uppercase text-sm'
  }
