import React from "react";
import { useParams } from "react-router-dom";
import { BrandRequestModel, FileModel } from "../../../../api/data-contracts";
import useApi from "../../../../hooks/useApi";
import { retrieve } from "../../../../utils/encryption";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
import { RequestButtons } from "../../../../Components/superadmin/RequestButtons";
import { DownloadFile } from "../../../../Components/common/DownloadFile";
import { AvatarAndName } from "../../../../Components/common/AvatarAndName";
import { TextItemsList } from "../Admins/TextItemsList";
import { IsLoading } from "../../../../Components/common/InfoGroup/IsLoading";
import { ErrorReq } from "../../../../Components/common/InfoGroup/ErrorReq";


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
      <h3 className="w-full text-center uppercase py-3">Заявка на открытие бренда</h3>
      {data && (
        <>
          {/* Отображаем логитип и название */}
          <AvatarAndName name={data.name || null} photoId={data.photo || null} />
          {/* Отображаем информацию из заявки */}
          <TextItemsList info={data} type="brandRequest"/>
          {/* Отображение файлов */}
          <div className={getStyles(containerFilesStyle)}>
            <h3 className={getStyles(h3Style)}>Файлы компании</h3>
            {/* При наличии прикрепленных файлов отображаем ссылки для их скачивания */}
            {data.files ? (
              data.files.map((el: FileModel) => {
                return <DownloadFile id={el.fileGuid || null} key={el.fileGuid} />;
              })
            ) : (
              <span>Файлы отсутствуют</span>
            )}
          </div>
          {/* Кнопки Одобрить и Отклонить */}
          <RequestButtons />
        </>
      )}
      <IsLoading show={isLoading} />
      <ErrorReq show={!!dataError} error={dataError} />
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
