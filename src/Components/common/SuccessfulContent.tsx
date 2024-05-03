import React from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";

// Контент, сообщающий об успехе какого-то действия, который передается в модальное окно
export const SuccessfulContent = ({message}: {message: string}) => {
  return (
    <>
      <div className={getStyles(containerStyle)}>
        <img src="/images/successful.png" alt="Галочка"/>
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
