import React, { useEffect, useState } from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { useNavigate } from "react-router-dom";

export const SuccessfulContent = ({message}: {message: string}) => {
  return (
    <>
      <div className={getStyles(containerStyle)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M9.92188 17.7082L14.1719 21.9582L24.0885 12.0415"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.0026 31.1666C24.8269 31.1666 31.1693 24.8242 31.1693 16.9999C31.1693 9.17567 24.8269 2.83325 17.0026 2.83325C9.17835 2.83325 2.83594 9.17567 2.83594 16.9999C2.83594 24.8242 9.17835 31.1666 17.0026 31.1666Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3 className={getStyles(h3Style)}>{message}</h3>
      </div>
    </>
  );
};

const containerStyle: BlockStyle = {
    background: "bg-white",
    blockSize: "w-3/4 max-w-96",
    container: "flex flex-col items-center gap-3",
    spacing: 'm-auto py-5'
  };

  const h3Style: BlockStyle = {
    text: "text-center text-base text-black",
  };
