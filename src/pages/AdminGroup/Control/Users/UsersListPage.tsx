import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserInfoPage } from "./UserInfoPage";
import { UsersList } from "../../../../Components/superadmin/UsersList";
import { UserType } from "../../../../api/data-contracts";


export const UsersListPage = () => {
    return (
        <>
            <Routes>
                <Route index element={
                    <>
                        <h3 className='w-full text-center uppercase py-4'>Пользователи</h3>
                        <UsersList userType={UserType.User} />
                    </>
                }/>
                <Route path=":id/*" element={<UserInfoPage />} />
            </Routes>
        </>
    );
};

