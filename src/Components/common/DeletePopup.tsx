import React, { useEffect, useState } from "react";
import { IDeletePopupProps } from "../../types/interfaces/componentsProps/IDeletePopupProps";
import { Button } from "./Button";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { SuccessfulPopup } from "./SuccessfulPopup";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { useParams } from "react-router-dom";

export const DeletePopup = ({
  apiMethod,
  handleClose,
  title,
}: IDeletePopupProps) => {
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [shouldExequte, setShouldExequte] = useState<boolean>(false)
  const { id } = useParams();
  const [data, isLoading, dataError] = useApi(
    apiMethod,
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    shouldExequte
  );

  useEffect(() => {
    if (shouldExequte && (data === '' || dataError)){
        setShouldExequte(false)
    }
      if (data === '' && !dataError) {
        setIsSuccessful(true);
      }
  }, [data, isLoading, dataError]);

  const handleClick = () => {
    setShouldExequte(true);
  };

  return (
    <>
      {!isSuccessful && (
        <>
          <div className={getStyles(divStyle)}></div>
          <div className={getStyles(containerStyle)}>
            <h3 className={getStyles(h3Style)}>{title}</h3>
            <Button
              showButton={true}
              styles={buttonStyle}
              onClick={handleClose}
            >
              Отменить
            </Button>
            <Button showButton={true} onClick={handleClick}>
              Удалить
            </Button>
          </div>
        </>
      )}
      {isSuccessful && (
        <SuccessfulPopup message={"Администратор удален"} />
      )}
      {dataError && <div>Возникла ошибка, повторите позже.</div>}
    </>
  );
};

const containerStyle: BlockStyle = {
  background: "bg-white",
  blockSize: "w-3/4 max-w-96",
  container: "fixed top-1/2 left-1/2 z-10",
  transitionsAnimation: "-translate-x-1/2 -translate-y-1/2",
  border: "rounded-2xl",
  spacing: "px-4 pb-4",
};

const h3Style: BlockStyle = {
  container: "block",
  blockSize: "w-3/4",
  spacing: "m-auto py-9",
  text: "text-center",
};

const buttonStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-white",
  spacing: "p-2 mb-3",
  text: "text-gray-500",
  border: "rounded-3xl border-gray-500 border",
};

const divStyle: BlockStyle = {
  container: "fixed inset-0 z-5",
  blockSize: "w-full h-full",
  background: "bg-black bg-opacity-70",
};
