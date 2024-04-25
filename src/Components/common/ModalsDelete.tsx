import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { IModalsDeleteProps } from "../../types/interfaces/componentsProps/IModalsDeleteProps";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { Button } from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { retrieve } from "../../utils/encryption";
import useApi from "../../hooks/useApi";
import { SuccessfulContent } from "./SuccessfulContent";
import { Info } from "./Info";

export const ModalsDelete = ({
  apiMethod,
  isOpen1,
  setIsOpen1,
  messageSuccess,
  messageSure,
  idForDelete
}: IModalsDeleteProps) => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [shouldExequte, setShouldExequte] = useState<boolean>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, isLoading, dataError] = useApi(
    apiMethod,
    idForDelete ? idForDelete : id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    shouldExequte
  );

  useEffect(() => {
    if (shouldExequte && (data === "" || dataError)) {
      setShouldExequte(false);
      if (data === "" && !dataError) {
        setIsOpen1(false);
        setIsOpen2(true);
        const timer = setTimeout(() => {
          setIsOpen1(false);
          navigate(-1);
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [data, isLoading, dataError]);

  const handleClick = () => {
    setShouldExequte(true);
  };

  return (
    <>
      <Modal isOpen={isOpen1} setIsOpen={setIsOpen1} swipeable={false}>
        <h3 className={getStyles(h3Style)}>{messageSure}</h3>
        <div className={getStyles(div1Style)}>
          <Button
            showButton={true}
            onClick={() => setIsOpen1(false)}
            styles={buttonStyle}
          >
            Отмена
          </Button>
          <Button showButton={true} onClick={handleClick}>
            Удалить
          </Button>
        </div>
      </Modal>
      <Modal isOpen={isOpen2} setIsOpen={setIsOpen2} swipeable={false}>
          <SuccessfulContent message={messageSuccess} />
        </Modal>
      <Info
        msg="Ошибка запроса, повторите позже."
        showInfo={!!dataError}
        style=""
      />
    </>
  );
};

const div1Style: BlockStyle = {
  container: "flex flex-col",
  spacing: "mt-4",
};

const buttonStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-white",
  spacing: "p-2 mb-3",
  text: "text-gray-500",
  border: "rounded-3xl border-gray-500 border",
};

const h3Style: BlockStyle = {
  container: "block",
  blockSize: "w-3/4",
  spacing: "m-auto py-4",
  text: "text-center text-black text-base",
};
