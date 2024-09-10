import React from "react";
import { ItemsList } from "../../../Components/common/ItemGroup/ItemsList";
import { Route, Routes } from "react-router-dom";
import { RequestsPage } from "./Requests/RequestsPage";
import { UsersListPage } from "./Users/UsersListPage";
import { BrandsPage } from "./Brands/BrandsPage";
import { PostListPage } from "./Posts/PostListPage";
import { AdminsPage } from "./Admins/AdminsPage";
import { RouteAccessControl } from "../../../Components/common/RouteAccessControl";
import { UserType } from "../../../api/data-contracts";


export const ControlPage = () => {
    const items = [
        { name: "Заявки на создание бренда", path: "./requests" },
        { name: "Администраторы", path: "./admins" },
        { name: "Пользователи", path: "./users" },
        { name: "Бренды", path: "./brands" },
        { name: "Публикации", path: "./posts" },
    ];
    return (
        <>
            <RouteAccessControl roleArr={[UserType.Admin, UserType.SuperAdmin]}>
                <Routes>
                    <Route index element={
                            <ItemsList items={items}/>
                        } 
                    />
                    <Route path='requests/*' element={ <RequestsPage /> }/>
                    <Route path='admins/*' element={ <AdminsPage /> }/>
                    <Route path="users/*" element={<UsersListPage />} />
                    <Route path="brands/*" element={<BrandsPage />} />
                    <Route path="posts/*" element={<PostListPage />} />
                </Routes>
            </RouteAccessControl>
        </>
    );
};
