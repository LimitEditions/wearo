import React from "react";
import { ItemsList } from "../../../Components/common/ItemGroup/ItemsList";
import { Route, Routes } from "react-router-dom";
import { RequestsPage } from "./Requests/RequestsPage";
import { UsersPage } from "./Users/UsersPage";
import { BrandsPage } from "./Brands/BrandsPage";
import { PostsPage } from "./PostsPage";

export const ControlPage = () => {
  const items = [
    { title: "Заявки на создание бренда", path: "/control/requests" },
    { title: "Пользователи", path: "/control/users" },
    { title: "Бренды", path: "/control/brands" },
    { title: "Публикации", path: "/control/posts" },
  ];
  return (
    <>
      <Routes>
        <Route index element={
          <ItemsList items={items}/>
        } 
        />
        <Route path='requests/*' element={ <RequestsPage /> }/>
        <Route path="users/*" element={<UsersPage />} />
        <Route path="brands/*" element={<BrandsPage />} />
        <Route path="posts" element={<PostsPage />} />
      </Routes>
    </>
    
  );
};
