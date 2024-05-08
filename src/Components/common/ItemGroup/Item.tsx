import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IItemProps } from "../../../types/interfaces/IItemProps";
import { BlockStyle } from "../../../types/interfaces/IStyles";
import getStyles from "../../../utils/getStyles";
import { ArrowRight } from "../ArrowRight";

const Item: React.FC<IItemProps> = ({ path, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // Если задан путь, то по клику будет осуществлен переход на другую страницу
  const handleClick = useCallback(() => {
    if (path) {
      navigate(location.pathname + path);
    }
  }, [path, location]);

  // Если указан путь, то добавляем hover-эффекты
  const containerStyle = path ? `${getStyles(divStyle)} ${getStyles(hoverStyle)}` : getStyles(divStyle)

  return (
    <div
      className={containerStyle}
      onClick={handleClick}
    >
      {children}
      {path && <ArrowRight />}
    </div>
  );
};

export default Item;

const divStyle: BlockStyle = {
  blockSize: "flex items-center justify-between",
  border: 'border-t divide-gray-400',
  spacing: "py-4 px-2",
  text: "text-sm",
};

const hoverStyle: BlockStyle = {
  hover: "cursor-pointer hover:bg-gray-50",
}