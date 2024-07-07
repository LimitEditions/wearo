import React from 'react'
import { AllAdmins } from './Admins/AllAdmins'
import { Route, Routes } from 'react-router-dom'
import { AddAdminPage } from './Admins/AddAdminPage'
import { EmployeeDetailsPage } from './Admins/EmployeeDetailsPage'


export const AdminsPage = () => {
    return (
        <Routes>
            <Route index element={<AllAdmins/>}/>
            <Route path='addadmin' element={ <AddAdminPage /> }/>
            <Route path="admin/:id" element={<EmployeeDetailsPage />} />
        </Routes>
    );
};
