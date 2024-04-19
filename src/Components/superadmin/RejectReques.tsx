import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Button } from "../common/Button";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { Modal } from "../common/Modal";
import { SuccessfulContent } from "../common/SuccessfulContent";
import { Info } from "../common/Info";

export const RejectReques = () => {
  const [shouldExecuteReject, setShouldExecuteReject] =
    useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataReject, isLoading, dataError] = useApi(
    "brandsRequestsUpdate",
    { guid: id, comment: "Запрос отклонен" },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    shouldExecuteReject
  );

  useEffect(() => {
    if (setShouldExecuteReject && (dataReject === '' || dataError)) {
      setShouldExecuteReject(false);
      if (dataReject === '' && !dataError) {
        setShowModal(true);
        const timer = setTimeout(() => {
          setShowModal(false);
          navigate(-1);
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [dataReject, isLoading, dataError]);

  return (
    <>
      <Button showButton={true} styles={buttonStyle} onClick={() => setShouldExecuteReject(true)}>
        Отклонить
      </Button>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <SuccessfulContent message="Заявка успешно отклонена" />
      </Modal>
      <Info msg="Ошибка запроса" showInfo={!!dataError} style="" />
    </>
  );
};

const buttonStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-white",
  spacing: "p-2 mb-3",
  text: "text-gray-500",
  border: "rounded-3xl border-gray-500 border",
};
