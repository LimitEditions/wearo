import React from "react";
import { IItemsListProps } from "../../types/interfaces/componentsProps/IItemsListProps";
import { ItemWithArrow } from "./ItemWithArrow";
import { useNavigate } from "react-router-dom";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { Photo } from "./Photo";

// Компонент для рендера списка элементов (название чего-то и стрелка вправо). Либо с картинкой, либо без.
export const ItemsList: React.FC<IItemsListProps> = ({ items }) => {
  const navigate = useNavigate();
  // По клику осуществляется переход на конкретную страницу, при наличии передается некий state,
  // например, это может быть информация о пользователе, чтобы избежать повторного запроса
  const handleClick = (path: string, state: any) => {
    navigate(path, {state: state});
  };
  return (
    <div className={getStyles(containerStyle)}>
      {items.map((el) => {
        return (
          <ItemWithArrow onClick={() => handleClick(el.path, el.state)} key={el.path}>
            <div className={getStyles(divStyle)}>
              {/* Если нужно, добавляем фото */}
              {el.needPhoto && (
                <Photo id={el?.photoId} styles={el.photoStyles || ""} alt={el.alt || 'Фотография'}/>
              )}
              <h2 className={getStyles(h2Style)}>{el.title}</h2>
            </div>
          </ItemWithArrow>
        );
      })}
    </div>
  );
};

const containerStyle: BlockStyle = {
  // blockSize: "min-h-screen",
  background: "bg-gray-100",
};

const h2Style: BlockStyle = {
  text: "uppercase text-sm",
};

const divStyle: BlockStyle = {
  container: "flex gap-3 items-center",
};
