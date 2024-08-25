import React from "react";
import { IItemsListProps } from "../../../types/interfaces/componentsProps/IItemsListProps";
import { Photo } from "../Photo";
import Item from "./Item";


// Компонент для рендера списка элементов (название чего-то и стрелка вправо). Либо с картинкой, либо без.
export const ItemsList: React.FC<IItemsListProps> = ({ items }) => {
    return (
        <div className='bg-gray-100'>
            {items.map((el) => {
                return (
                    <Item key={el.path} path={el.path}>
                        <div className='flex gap-3 items-center'>
                            {el.needPhoto && (
                                <Photo id={el?.photoId || null} styles={el.photoStyles || ""} alt={el.alt || 'Фотография'}/>
                            )}
                            <h2 className='uppercase text-sm'>{el.title}</h2>
                        </div>
                    </Item>
                );
            })}
        </div>
    );
};
