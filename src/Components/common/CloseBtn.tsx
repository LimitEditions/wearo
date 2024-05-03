import React from "react";
import { useNavigate } from "react-router-dom";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";

// Крестик, по нажатию на который осуществляется переход на предыдущую страницу
export const CloseBtn = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
  return (
    <div onClick={handleClick} className={getStyles(divStyle)} >
      <img src="/images/closeBtn.png" alt="Крестик для закрытия" />
    </div>
  );
};

const divStyle: BlockStyle = {
    container: 'self-center',
    transitionsAnimation: 'cursor-pointer'
}