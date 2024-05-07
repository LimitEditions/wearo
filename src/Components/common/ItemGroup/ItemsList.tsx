import React from "react";
import { IItemsListProps } from "../../../types/interfaces/componentsProps/IItemsListProps";
import { BlockStyle } from "../../../types/interfaces/IStyles";
import getStyles from "../../../utils/getStyles";
import { Photo } from "../Photo";
import Item from "./Item";

// Компонент для рендера списка элементов (название чего-то и стрелка вправо). Либо с картинкой, либо без.
export const ItemsList: React.FC<IItemsListProps> = ({ items }) => {
  return (
    <div className={getStyles(containerStyle)}>
      {items.map((el) => {
        return (
          <Item key={el.path} path={el.path}>
            <div className={getStyles(divStyle)}>
              {/* Если нужно, добавляем фото */}
              {el.needPhoto && (
                <Photo id={el?.photoId} styles={el.photoStyles || ""} alt={el.alt || 'Фотография'}/>
              )}
              <h2 className={getStyles(h2Style)}>{el.title}</h2>
            </div>
          </Item>
        );
      })}
    </div>
  );
};

const containerStyle: BlockStyle = {
  background: "bg-gray-100",
};

const h2Style: BlockStyle = {
  text: "uppercase text-sm",
};

const divStyle: BlockStyle = {
  container: "flex gap-3 items-center",
};
