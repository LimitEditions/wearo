import React from "react";
import { ISectionsTitle } from "../../types/interfaces/componentsProps/ISectionsTitle";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { CloseBtn } from "./CloseBtn";

// Компонент для создания названия раздела. 
export const SectionsTitle = ({
  title,
  needsClose,
  needTopSpasing = false,
  needBottomSpasing = false,
}: ISectionsTitle) => {
  const getContainerStyles = () => {
    // подбираем нужные стили в зависимости от того, нужна ли кнопка закрытия и отступ сверху/снизу
    const baseStyles = needsClose
      ? getStyles(containerWithClose)
      : getStyles(containerWithoutClose);
    const spasing = needTopSpasing
      ? getStyles(containerWithTopSpasing)
      : needBottomSpasing
      ? getStyles(containerWithBottomSpasing)
      : "";
    return baseStyles + spasing;
  };
  return (
    <div className={getContainerStyles()}>
      <div className={getStyles(divStyle)}>
        <h2 className={getStyles(h2Style)}>{title}</h2>
        {needsClose ? <CloseBtn /> : null}
      </div>
    </div>
  );
};

const containerWithoutClose: BlockStyle = {
  blockSize: "w-full",
  background: "bg-gray-100",
  spacing: "px-2 py-4",
};

const containerWithClose: BlockStyle = {
  blockSize: "w-full",
  spacing: "px-2 py-4",
  background: 'bg-white'
};

const containerWithTopSpasing: BlockStyle = {
  spacing: "px-2 pt-12 pb-4",
};

const containerWithBottomSpasing: BlockStyle = {
  spacing: "px-2 pb-12 pt-4",
};

const divStyle: BlockStyle = {
  container: "flex justify-between",
  blockSize: "w-full",
  spacing: "m-auto",
};

const h2Style: BlockStyle = {
  text: "text-base font-normal uppercase",
};
