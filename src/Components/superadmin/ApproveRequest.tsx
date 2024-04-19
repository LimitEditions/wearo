import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Button } from "../common/Button";
import { Info } from "../common/Info";
import { Modal } from "../common/Modal";
import { SuccessfulContent } from "../common/SuccessfulContent";

export const ApproveRequest = () => {
  const [shouldExecuteApprove, setShouldExecuteApprove] =
    useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataApprove, isLoading, dataError] = useApi(
    "brandsRequestsCreate2",
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    shouldExecuteApprove
  );

  useEffect(() => {
    if (shouldExecuteApprove && (dataApprove || dataError)) {
      setShouldExecuteApprove(false);
      if (dataApprove) {
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
  }, [dataApprove, isLoading, dataError]);
  return (
    <>
      <Button showButton={true} onClick={() => setShouldExecuteApprove(true)}>
        Одобрить
      </Button>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <SuccessfulContent message="Заявка успешно одобрена" />
      </Modal>
      <Info msg="Ошибка запроса" showInfo={!!dataError} style="" />
    </>
  );
};
