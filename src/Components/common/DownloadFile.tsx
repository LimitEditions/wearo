import React, { useEffect, useState } from "react";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { FileModel } from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Info } from "./Info";

// Компонент отображает иконку файла и ссылку на скачивание этого файла
export const DownloadFile = ({ id }: { id: string | undefined }) => {
  const [file, setFile] = useState<FileModel>();
  // получаем файл для скачивания
  const [data, isLoading, dataError] = useApi(
    "filesModelDetail",
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setFile(data);
    }
  }, [data, isLoading, dataError]);

  if (!id) return null;
  return (
    <div className={getStyles(givStyle)}>
      {file && (
        <>
          <img src="/images/downloadFile.png" alt="Иконка скачивания файла"/>
          <a href={`http://vne.su:8081/api/Files/${id}`} download>
            {file?.name || "Название не указано"}
          </a>
        </>
      )}
      <Info msg="Не удалось загрузить файл" showInfo={!!dataError} style="" />
    </div>
  );
};

const givStyle: BlockStyle = {
  container: "flex gap-1",
};
