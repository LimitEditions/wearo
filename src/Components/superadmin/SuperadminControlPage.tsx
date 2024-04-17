import React from "react";
import { ItemsList } from "../common/ItemsList";

export const SuperadminControlPage = () => {
  const items = [
    { title: "Заявки на создание бренда", path: "/control/requests" },
    { title: "Пользователи", path: "/control/users" },
    { title: "Бренды", path: "/control/brands" },
    { title: "Публикации", path: "/control/posts" },
  ];
  return (
    <ItemsList items={items}/>
  );
};