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

export const Subscription = ({
  subId,
  brandId,
}: {
  subId: string | undefined;
  brandId: string | undefined;
}) => {
  const [photoId, setPhotoId] = useState<string | undefined | null>();
  const [brandName, setBrandName] = useState<string>();
  const [brandInfo, setBrandInfo] = useState<BrandModel>();
  const [mod, setMod] = useState<boolean>(false)

  const [data, isLoading, dataError] = useApi(
    "brandsDetail",
    brandId,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setBrandInfo(data);
    }
    if (brandInfo) {
      setBrandName(brandInfo.name);
      setPhotoId(brandInfo.photo);
    }
  }, [data, isLoading, dataError, brandInfo]);

  if (!subId || !brandId) return null;
  return (
    <>
      {brandName && photoId && (
        <div className={getStyles(containerStyle)}>
          <div className={getStyles(divStyle)}>
            <Photo id={photoId} styles={getStyles(imgStyle)} />
            <span className={getStyles(spanStyle)}>{brandName}</span>
          </div>
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