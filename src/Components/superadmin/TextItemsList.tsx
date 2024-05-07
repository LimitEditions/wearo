import React from "react";
import { ITextItemsListProps } from "../../types/interfaces/componentsProps/ITextItemsListProps";
import { BrandRequestModel, UserModel } from "../../api/data-contracts";
import { getBrandRequestInfo, getUserInfo } from "../../utils/getTextItems";
import Item from "../common/ItemGroup/Item";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";

export const TextItemsList: React.FC<ITextItemsListProps> = ({
  info,
  type,
}) => {
  // Определяем, данные какого типа пришли
  const currentModel =
    type === "brandRequest" ? (info as BrandRequestModel) : (info as UserModel);

  // Создаем массив с названиями полей и их значениями
  const currentInfo =
    type === "brandRequest"
      ? getBrandRequestInfo(currentModel)
      : getUserInfo(currentModel, type);

  return (
    <>
      {currentInfo.map((el) => {
        return (
          <Item key={el.infoTitle}>
            <div className={getStyles(containerStyle)}>
              <div>
                <h3 className={getStyles(h3Style)}>{el.infoTitle}</h3>
                {el.value ? (
                  <span className={getStyles(spanStyle)}>{el.value}</span>
                ) : (
                  <span className={getStyles(spanStyle)}>
                    Данные не указаны
                  </span>
                )}
              </div>
            </div>
          </Item>
        );
      })}
    </>
  );
};

const h3Style: BlockStyle = {
  text: "text-xs font-normal",
};

const spanStyle: BlockStyle = {
  text: "font-normal text-sm",
};

const containerStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-gray-100",
  container: "flex justify-between",
};
