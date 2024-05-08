import React, { useEffect, useState } from "react";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import { useParams } from "react-router-dom";
import { BrandRequestModel, FileModel } from "../../../../api/data-contracts";
import useApi from "../../../../hooks/useApi";
import { retrieve } from "../../../../utils/encryption";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
import { RequestButtons } from "../../../../Components/superadmin/RequestButtons";
import { Info } from "../../../../Components/common/Info";
import { DownloadFile } from "../../../../Components/common/DownloadFile";
import { AvatarAndName } from "../../../../Components/common/AvatarAndName";
import { TextItemsList } from "../../../../Components/superadmin/TextItemsList";

export const RequestInfoPage = () => {
  const { id } = useParams();
  // Запрос на получение информации о конкретной заявкe на создание бренда
  const [data, isLoading, dataError] = useApi<"brandsRequestsDetail", BrandRequestModel>(
    "brandsRequestsDetail",
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  return (
    <div className={getStyles(divStyle)}>
      <SectionsTitle needsClose={true} title="Заявка на открытие бренда" />
      {data && (
        <>
          {/* Отображаем логитип и название */}
          <AvatarAndName name={data.name} photoId={data.photo} />
          {/* Отображаем информацию из заявки */}
          <TextItemsList info={data} type="brandRequest"/>
          {/* Отображение файлов */}
          <div className={getStyles(containerFilesStyle)}>
            <h3 className={getStyles(h3Style)}>Файлы компании</h3>
            {/* При наличии прикрепленных файлов отображаем ссылки для их скачивания */}
            {data.files ? (
              data.files.map((el: FileModel) => {
                return <DownloadFile id={el.fileGuid} key={el.fileGuid} />;
              })
            ) : (
              <span>Файлы отсутствуют</span>
            )}
          </div>
          {/* Кнопки Одобрить и Отклонить */}
          <RequestButtons />
        </>
      )}
      <Info
        msg="Ошибка получения данных о заявке."
        showInfo={!!dataError}
        style=""
      />
    </div>
  );
};

const divStyle: BlockStyle = {
  spacing: "pb-12",
  background: "bg-gray-100",
};

const containerFilesStyle: BlockStyle = {
  blockSize: "w-full",
  background: "bg-gray-100",
  spacing: "px-2 py-4",
  border: "border-t border-gray-200",
  container: "flex flex-col gap-2",
};

const h3Style: BlockStyle = {
  text: "text-xs font-normal",
};
