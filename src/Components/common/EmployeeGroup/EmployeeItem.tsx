import React from "react";
import { IEmployeeItem } from "../../../types/interfaces/componentsProps/IEmployeeItem";
import { BlockStyle } from "../../../types/interfaces/IStyles";
import getStyles from "../../../utils/getStyles";
import { useNavigate } from "react-router-dom";
import { ItemWithArrow } from "../ItemGroup/ItemWithArrow";

// Компонент для создания одного элемента из списка сотрудников (будет отображаться имя, ниже должность и справа будет стрелка). 
// При нажатии на этот элемент будет переход на страницу с подробной информацией о сотрунике
export const EmployeeItem = ({ firstName, id, position }: IEmployeeItem) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`./admin/${id}`)
    }
  return (
    <ItemWithArrow onClick={handleClick}>
      <div>
        <h3 className={getStyles(h3Style)} >{firstName ? firstName : "Имя не указано"}</h3>
        <span className={getStyles(spanStyle)}>{position}</span>
      </div>
    </ItemWithArrow>
  );
};

const h3Style: BlockStyle = {
    text: 'text-sm font-normal'
}

const spanStyle: BlockStyle = {
    text: 'font-normal text-xs text-gray-500'
}
