import { BrandRequestModel, UserModel } from "../api/data-contracts";

// использование библиотеки для форматирования даты
const moment = require("moment");

export function getBrandRequestInfo(info: BrandRequestModel) {
  return [
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
      value: moment(info.user?.createDT).format("DD.MM.YYYY"),
    },
    {
      infoTitle: "Дата регистрации заявки",
      value: moment(info.createDT).format("DD.MM.YYYY"),
    },
  ];
}

export function getUserInfo(info: UserModel, type: "admin" | "user") {
  const userInfo = [
    {
      infoTitle: "Фамилия",
      value: info.secondName,
    },
    {
      infoTitle: "Логин",
      value: info.username,
    },
    {
      infoTitle: "Почта",
      value: info.userInfo?.email,
    },
    {
      infoTitle: "Телефон",
      value: info.userInfo?.phone,
    },
    {
      infoTitle: "Telegram",
      value: info.userInfo?.telegramId,
    },
    {
      infoTitle: "Vk",
      value: info.userInfo?.vkId,
    },
    {
      infoTitle: "Дата регистрации",
      value: moment(info.createDT).format("DD.MM.YYYY"),
    },
  ];

  if (type === "admin") {
    userInfo.unshift({
      infoTitle: "Имя",
      value: info.firstName,
    });
  }
  return userInfo;
}
