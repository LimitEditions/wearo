import React from "react";
import { useNavigate } from "react-router-dom";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";

export const CloseBtn = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
  return (
    <div onClick={handleClick} className={getStyles(divStyle)} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M1 15L8 8L15 15M15 1L7.99867 8L1 1"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

const divStyle: BlockStyle = {
    container: 'self-center',
    transitionsAnimation: 'pointer'
}
