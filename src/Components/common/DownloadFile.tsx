import React from "react";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { FileModel } from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { ErrorReq } from "./InfoGroup/ErrorReq";

// Компонент отображает иконку файла и ссылку на скачивание этого файла
export const DownloadFile = ({ id }: { id: string | null }) => {
  // получаем файл для скачивания
  const [data, , dataError] = useApi<'filesModelDetail', FileModel>(
    "filesModelDetail",
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  if (!id) return null;
  return (
    <div className={getStyles(givStyle)}>
      {data && (
        <>
          <img src="/images/downloadFile.png" alt="Иконка скачивания файла"/>
          <a href={`${process.env.REACT_APP_URL_REQUEST}/api/Files/${id}`} download>
            {data?.name || "Название не указано"}
          </a>
        </>
      )}
      <ErrorReq show={!!dataError} error={dataError}/>
    </div>
  );
};

const givStyle: BlockStyle = {
  container: "flex gap-1",
};
