import React from "react";
import { IEmployeeItem } from "../../types/interfaces/componentsProps/IEmployeeItem";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { ArrowLeftSvg } from "./ArrowLeftSvg";
import { useNavigate } from "react-router-dom";

export const EmployeeItem = ({ firstName, id }: IEmployeeItem) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/options/admin/${id}`)
    }
  return (
    <div className={getStyles(containerStyle)} onClick={handleClick}>
      <div>
        <h3 className={getStyles(h3Style)} >{firstName ? firstName : "Имя не указано"}</h3>
        <span className={getStyles(spanStyle)}>Сотрудник</span>
      </div>
      <ArrowLeftSvg />
    </div>
  );
};

const containerStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-gray-100",
  spacing: "px-2 py-4",
  border: "border-t border-gray-200",
  container: "flex justify-between",
  hover: 'cursor-pointer'
};

const h3Style: BlockStyle = {
    text: 'text-sm font-normal'
}

const spanStyle: BlockStyle = {
    text: 'font-normal text-xs text-gray-500'
}
