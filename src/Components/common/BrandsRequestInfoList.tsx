import React from "react";
import { BrandRequestModel, FileModel } from "../../api/data-contracts";
import { EmployeeInfo } from "./EmployeeInfo";
import { DownloadFile } from "./DownloadFile";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { AvatarAndName } from "./AvatarAndName";

export const BrandsRequestInfoList = ({
  info,
}: {
  info: BrandRequestModel;
}) => {
  // использование библиотеки для форматирования даты
  const moment = require('moment');

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
      value: moment(info.user?.createDT).format('DD.MM.YYYY'),
    },
    {
      infoTitle: "Дата регистрации заявки",
      value: moment(info.createDT).format('DD.MM.YYYY'),
    },
  ];
  return (
    <>
      <AvatarAndName name={info.name} photoId={info.photo}/>
      {/* Список текстовой информации - название поля и его значение */}
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
        {/* При наличии прикрепленных файлов отображаем ссылки для их скачивания */}
        {info?.files ? (
          info.files.map((el: FileModel) => {
            return <DownloadFile id={el.fileGuid} key={el.fileGuid}/>
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