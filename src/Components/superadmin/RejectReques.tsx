import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Button } from "../common/Button";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { Modal } from "../common/Modal";
import { Info } from "../common/Info";
import { Input } from "../common/Input";
import getStyles from "../../utils/getStyles";
import { SuccessfulContent } from "../common/SuccessfulContent";

export const RejectReques = () => {
  // Флаг отправки запроса на сервер
  const [shouldExecuteReject, setShouldExecuteReject] =
    useState<boolean>(false);
  // Флаг для отображения окна с комментарием
  const [showModal, setShowModal] = useState<boolean>(false);
  // Флаг для оторажения окна успеха
  const [showSuccessfulModal, setShowSuccessfulModal] =
    useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const { id } = useParams();
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [dataReject, isLoading, dataError] = useApi(
    "brandsRequestsUpdate",
    { guid: id, comment: comment },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    shouldExecuteReject
  );

  useEffect(() => {
    if (setShouldExecuteReject && (dataReject === "" || dataError)) {
      setShouldExecuteReject(false);
      if (dataReject === "" && !dataError) {
        // Если заявка успешно отклонена, закрываем окно для комментария,
        // показываем на 2 секунды окно успеха
        setShowModal(false);
        setShowSuccessfulModal(true);
        const timer = setTimeout(() => {
          setShowSuccessfulModal(false);
          navigate(-1);
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [dataReject, isLoading, dataError]);

  useEffect(() => {
    if (showModal) {
      // Обработка клика по любому другому месту кроме модального окна
      const handleOutsideClick = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          setShowModal(false);
        }
      };
      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, []);

  return (
    <>
      <Button
        showButton={true}
        styles={buttonStyle}
        onClick={() => setShowModal(true)}
      >
        Отклонить
      </Button>
      {/* Оборачиваем модалку в div, чтобы отслеживать клик в другое место, в будущем вынести это в отдельный компонент */}
      <div ref={modalRef}>
        <Modal
          isOpen={showModal}
          setIsOpen={setShowModal}
          title="Укажите причину отказа"
          additionalStyles={additionalStyles}
        >
          <Input
            placeholder="Комментарий"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            required
          />
          <div className={getStyles(divStyle)}>
            <Button
              showButton={true}
              type="button"
              onClick={() => setShouldExecuteReject(true)}
            >
              Отклонить
            </Button>
          </div>
        </Modal>
      </div>
      <Modal isOpen={showSuccessfulModal} setIsOpen={setShowSuccessfulModal}>
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

const additionalStyles: BlockStyle = {
  spacing: "p-0",
  blockSize: "min-h-1/3 w-full",
  container: "fixed overflow-y-auto flex bottom-0",
};

const divStyle: BlockStyle = {
  spacing: "m-auto mt-8",
  blockSize: "w-3/4",
};
