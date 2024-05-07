import React from "react";
import { UserModel } from "../../../api/data-contracts";
import Item from "../ItemGroup/Item";
import { BlockStyle } from "../../../types/interfaces/IStyles";
import getStyles from "../../../utils/getStyles";

// Компонент создает массив с информацией о пользователе, передает их в Item.
// Каждое поле без стрелки для перехода на другую страницу
export const EmployeeInfoList = ({ user }: { user: UserModel }) => {
  const userData = [
    {
      infoTitle: "Имя",
      value: user.firstName,
    },
    {
      infoTitle: "Фамилия",
      value: user.secondName,
    },
    {
      infoTitle: "Логин",
      value: user.username,
    },
  ];
  return (
    <>
      {userData.map((el) => {
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

const containerStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-gray-100",
  container: "flex justify-between",
};

const h3Style: BlockStyle = {
  text: "text-xs font-normal",
};

const spanStyle: BlockStyle = {
  text: "font-normal text-sm",
};
