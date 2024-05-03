import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Button } from "../common/Button";
import { Info } from "../common/Info";
import { Modal } from "../common/Modal";
import { SuccessfulContent } from "../common/SuccessfulContent";

// Кнопка одобрения заявки на создание бренда.
// По клику на кнопку отображается модальное окно, сообщающее об успешном одобрении заявки.
export const ApproveRequest = () => {
  // Флаг для отправки запроса на одобрение заявки.
  const [shouldExecuteApprove, setShouldExecuteApprove] =
    useState<boolean>(false);
  // Флаг отображения модального окна
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
        // При успешном запросе сообщаеи об этом в модальном окне, а через 2 секунды закрываем его и возвращаемся на страницу назад
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
      <Modal isOpen={showModal} setIsOpen={setShowModal} swipeable={false}>
        <SuccessfulContent message="Заявка успешно одобрена" />
      </Modal>
      <Info msg="Ошибка запроса" showInfo={!!dataError} style="" />
    </>
  );
};
