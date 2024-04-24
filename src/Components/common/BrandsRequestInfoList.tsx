import React from "react";
import { BrandRequestModel, FileModel } from "../../api/data-contracts";
import { EmployeeInfo } from "./EmployeeInfo";
import { getDate } from "../../utils/getDate";
import { DownloadFile } from "./DownloadFile";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { AvatarAndName } from "./AvatarAndName";

export const BrandsRequestInfoList = ({
  info,
}: {
  info: BrandRequestModel;
}) => {

  const requestInfo = [
    {
      infoTitle: "Описание",
      value: info.description,
    },
    {
      infoTitle: "Подробное описание",
      value: info.descriptionRichContent,
    },
    {
      infoTitle: "Ссылка на сайт",
      value: info.link,
    },
    {
      infoTitle: "Комментарий",
      value: info.comment,
    },
    {
      infoTitle: "Логин заявителя",
      value: info.user?.username,
    },
    {
      infoTitle: "Имя заявителя",
      value: info.user?.firstName,
    },
    {
      infoTitle: "Фамилия заявителя",
      value: info.user?.secondName,
    },
    {
      infoTitle: "Дата регистрации заявителя",
      value: getDate(info.user?.createDT),
    },
    {
      infoTitle: "Дата регистрации заявки",
      value: getDate(info.createDT),
    },
  ];
  return (
    <>
      <AvatarAndName name={info.name} photoId={info.photo}/>
      {requestInfo.map((el) => {
        return (
          <EmployeeInfo
            needArrow={false}
            title={el.infoTitle}
            value={el.value}
            key={el.infoTitle}
          />
        );
      })}
      <div className={getStyles(containerStyle)}>
        <h3 className={getStyles(h3Style)}>Файлы компании</h3>
        {info?.files ? (
          info.files.map((el: FileModel) => {
            return <DownloadFile id={el.fileGuid} name="Файл" />
          })
        ) : (
          <span>Файлы отсутствуют</span>
        )}
      </div>
    </>
  );
};


const containerStyle: BlockStyle = {
    blockSize: "w-full",
    background: "bg-gray-100",
    spacing: "px-2 py-4",
    border: "border-t border-gray-200",
    container: "flex flex-col gap-2",
  };
  
  const h3Style: BlockStyle = {
      text: 'text-xs font-normal'
  }
  
  const spanStyle: BlockStyle = {
      text: 'font-normal text-sm'
  }