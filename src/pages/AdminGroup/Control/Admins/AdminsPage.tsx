import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminsListPage } from './AdminsListPage';
import { AddAdminPage } from './AddAdminPage';
import { AdminInfoPage } from './AdminInfoPage';


export const AdminsPage = () => {
    return (
        <Routes>
            <Route index element={<AdminsListPage/>}/>
            <Route path='addadmin' element={ <AddAdminPage /> }/>
            <Route path=":id" element={<AdminInfoPage />} />
        </Routes>
    );
};
