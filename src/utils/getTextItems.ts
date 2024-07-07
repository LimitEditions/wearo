import moment from "moment";
import { BrandRequestModel, UserModel } from "../api/data-contracts";


export function getBrandRequestInfo(info: BrandRequestModel) {
  return [
    {
      infoTitle: "Описание",
      value: info.description,
      name: 'description'
    },
    {
      infoTitle: "Подробное описание",
      value: info.descriptionRichContent,
      name: 'descriptionRichContent'
    },
    {
      infoTitle: "Ссылка на сайт",
      value: info.link,
      name: 'link'
    },
    {
      infoTitle: "Комментарий",
      value: info.comment,
      name: 'comment'
    },
    {
      infoTitle: "Логин заявителя",
      value: info.user?.username,
      name: 'user.username'
    },
    {
      infoTitle: "Имя заявителя",
      value: info.user?.firstName,
      name: 'user.firstName'
    },
    {
      infoTitle: "Фамилия заявителя",
      value: info.user?.secondName,
      name: 'user.secondName'
    },
    {
      infoTitle: "Дата регистрации заявителя",
      value: moment(info.user?.createDT).format("DD.MM.YYYY"),
      name: 'user.createDT'
    },
    {
      infoTitle: "Дата регистрации заявки",
      value: moment(info.createDT).format("DD.MM.YYYY"),
      name: 'createDT'
    },
  ];
}

export function getUserInfo(info: UserModel, type: "admin" | "user") {
  const userInfo = [
    {
      infoTitle: "Фамилия",
      value: info.secondName,
      name: 'secondName'
    },
    {
      infoTitle: "Логин",
      value: info.username,
      name: 'username'
    },
    {
      infoTitle: "Почта",
      value: info.userInfo?.email,
      name: 'userInfo.email'
    },
    {
      infoTitle: "Телефон",
      value: info.userInfo?.phone,
      name: 'userInfo.phone'
    },
    {
      infoTitle: "Telegram",
      value: info.userInfo?.telegramId,
      name: 'userInfo.telegramId'
    },
    {
      infoTitle: "Vk",
      value: info.userInfo?.vkId,
      name: 'userInfo.vkId'
    },
    {
      infoTitle: "Дата регистрации",
      value: moment(info.createDT).format("DD.MM.YYYY"),
      name: 'createDT'
    },
  ];

  if (type === "admin") {
    userInfo.unshift({
      infoTitle: "Имя",
      value: info.firstName,
      name: 'firstName'
    });
  }
  return userInfo;
}
