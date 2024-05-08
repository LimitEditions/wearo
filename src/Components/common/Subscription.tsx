import React, { useEffect, useState } from "react";
import { BrandModel } from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Photo } from "./Photo";
import { Button } from "./Button";
import { Info } from "./Info";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { ModalsDelete } from "./ModalsDelete";

// Отображение конкретной подписки: логотип бренда с названием, а также кнопка для отмены подписки
export const Subscription = ({
  subId,
  brandId,
}: {
  subId: string | undefined;
  brandId: string | undefined;
}) => {
  // Флаг открытия окна удаления подписки
  const [mod, setMod] = useState<boolean>(false)

  // Получаем данные о бренде, на который подписан пользователь
  const [data, isLoading, dataError] = useApi<'brandsDetail', BrandModel>(
    "brandsDetail",
    brandId,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  if (!subId || !brandId) return null;
  return (
    <>
      {data && (
        <div className={getStyles(containerStyle)}>
          <div className={getStyles(divStyle)}>
            <Photo id={data.photo} styles={getStyles(imgStyle)} alt='Логотип бренда'/>
            <span className={getStyles(spanStyle)}>{data.name}</span>
          </div>
          {/* По нажатию на кнопку отмены подписки появляется окно с кнопками Удалить и Отменить */}
          <Button showButton={true} styles={btnStyle} onClick={() => setMod(true)}>Отменить подписку</Button>
        </div>
      )}
      <ModalsDelete apiMethod="subscriptionsDelete" idForDelete={subId} isOpen1={mod} setIsOpen1={setMod} messageSuccess="Подписка отменена." messageSure="Вы уверены, что хотите удалить подписку?"/>
      <Info msg="Загрузка..." showInfo={isLoading} style="" />
      <Info msg="Ошибка получения данных." showInfo={!!dataError} style="" />
    </>
  );
};

const imgStyle: BlockStyle = {
  blockSize: "w-7 h-7 object-cover",
  border: "rounded-3xl",
};

const containerStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-gray-100",
  spacing: "px-2 py-4",
  border: "border-t border-gray-200",
  container: "flex justify-between",
  hover: "cursor-pointer",
};

const divStyle: BlockStyle = {
    container: 'flex items-center gap-2'
}

const btnStyle: BlockStyle = {
    blockSize: 'w-max',
    text: 'text-xs'
}

const spanStyle: BlockStyle = {
    text: 'text-xs'
}