import React, { useEffect, useState } from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles'
import useApi from '../../hooks/useApi'
import { retrieve } from '../../utils/encryption'
import { useNavigate, useParams } from 'react-router-dom'
import { Modal } from '../common/Modal'
import { ResultInModal } from '../common/ResultInModal'
import { Button } from '../common/Button'
import { Input } from '../common/InputGroup/Input'


// Кнопки для одобрения или отклонения заявки
export const RequestButtons = () => {
  // стандартные хуки реакт
  const { id } = useParams();
  const navigate = useNavigate();

  // переменные: текст сообщения (при отклонении запроса), тип запроса 
  const [comment, setComment] = useState<string>('');
  const [status, setStatus] = useState<'approve' | 'reject'>('approve');
  
  // стейт для модальных окон и методы закрытия/открытия
  const [activeModal, setActiveModal] = useState<'modalResult' | 'modalComment' | null>(null);
  const openModal = (modalName: 'modalResult' | 'modalComment') => {
    setActiveModal(modalName);
  };
  const closeModal = () => {
    setActiveModal(null);
  };

  // параметры запроса и сам запрос
  const params = status === 'approve'? id: { guid: id, comment: comment };
  const apiMethod = status === 'approve'? 'brandsRequestsCreate2': 'brandsRequestsUpdate';
  const [shouldExecute, setShouldExecute] = useState<boolean>(false);
  const [data, , error] = useApi(
    apiMethod,
    params,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    shouldExecute
  );

  useEffect(() => {
    if(shouldExecute && (data || data === '' || error)) {
      // после взаимодействия с сервером сбрасываем флаг
      setShouldExecute(false);
    };
    if(activeModal === 'modalResult') {
      // осуществляем переход по таймингу после всплытия результирующего окна
      const timer = setTimeout(() => {
        closeModal();
        navigate(-1);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    };
  }, [shouldExecute, data, error, activeModal, navigate])

  return (
    <div className={getStyles(div1Style)}>
        <Button showButton={true} onClick={() => {openModal('modalResult'); setStatus('approve'); setShouldExecute(true)}}>
          Одобрить
        </Button>
        <Button showButton={true} styles='w-full bg-white p-2 mb-3 text-gray-500 rounded-3xl border-gray-500 border' onClick={() => {openModal('modalComment'); setStatus('reject')}}>
          Отклонить
        </Button>

        <Modal
          isOpen={activeModal === 'modalComment'}
          setIsOpen={closeModal}
          title="Укажите причину отказа"
          additionalStyles={{container: getStyles(additionalStyles)}}
          swipeable={true}
        >
          <Input
            placeholder="Комментарий"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <div className={getStyles(div2Style)}>
            <Button
              showButton={true}
              type="button"
              onClick={() => {setShouldExecute(true); setActiveModal('modalResult')}}
            >
              Отклонить
            </Button>
          </div>
        </Modal>

        <Modal isOpen={activeModal === 'modalResult'} setIsOpen={closeModal} swipeable={false}>
          {error ? 
            <span className={getStyles(spanStyle)}>Ошибка запроса, повторите позже</span> 
            :
            <ResultInModal 
              message={`Заявка успешно ${status === 'approve'? 'одобрена': 'отклонена'}`}
              path="/images/successful.png"
            />
          }
        </Modal>
    </div>
  )
}

const div1Style: BlockStyle = {
    blockSize: 'w-9/12 max-w-screen-md',
    spacing: 'm-auto mt-10',
    container: 'flex flex-col gap-2'
}

const additionalStyles: BlockStyle = {
  spacing: "p-0",
  blockSize: "min-h-1/3 w-full",
  container: "fixed overflow-y-auto flex bottom-0",
};

const div2Style: BlockStyle = {
  spacing: "m-auto mt-8",
  blockSize: "w-3/4",
};

const spanStyle: BlockStyle = {
  text: 'text-base text-black',
  spacing: 'pb-4'
}