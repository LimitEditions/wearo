import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

interface IItem {
  path: any;
  children: any
}

const Item: React.FC<IItem> = ({ path, children }) => {
  const navigate = useNavigate();

  return (
    <div
        className={getStyles(profItStyle)} 
        onClick={() => navigate(`.${path}`)}>
      {children}
      <span className={getStyles(angleStyle)}>{'>'}</span>
    </div>
  );
};

export default Item;

const profItStyle: BlockStyle = {
    blockSize: "flex-col items-center max-w-md relative",
    border: "p-2 border-t border-gray-300 ",
    hover: "cursor-pointer hover:bg-gray-50",
    spacing: 'my-1 mx-0',
    text: "text-md",
};

const angleStyle: BlockStyle = {
    blockSize: "absolute right-1 top-1/2",
    transitionsAnimation: "transform -translate-y-1/2",
    text: "text-lg",
};

