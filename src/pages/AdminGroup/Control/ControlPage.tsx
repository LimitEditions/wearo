import React from "react";
import { ItemsList } from "../../../Components/common/ItemGroup/ItemsList";
import { Route, Routes } from "react-router-dom";
import { RequestsPage } from "./Requests/RequestsPage";
import { UsersPage } from "./Users/UsersPage";
import { BrandsPage } from "./Brands/BrandsPage";
import { PostsPage } from "./PostsPage";
import { AdminsPage } from "./AdminsPage";


export const ControlPage = () => {
    const items = [
        { title: "Заявки на создание бренда", path: "./requests" },
        { title: "Администраторы", path: "./admins" },
        { title: "Пользователи", path: "./users" },
        { title: "Бренды", path: "./brands" },
        { title: "Публикации", path: "./posts" },
    ];
    return (
        <>
            <Routes>
                <Route index element={
                        <ItemsList items={items}/>
                    } 
                />
                <Route path='requests/*' element={ <RequestsPage /> }/>
                <Route path='admins/*' element={ <AdminsPage /> }/>
                <Route path="users/*" element={<UsersPage />} />
                <Route path="brands/*" element={<BrandsPage />} />
                <Route path="posts" element={<PostsPage />} />
            </Routes>
        </>
    );
};
