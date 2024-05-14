import React from 'react'
import { AllAdmins } from '../../../Components/superadmin/AllAdmins'
import getStyles from '../../../utils/getStyles'
import { BlockStyle } from '../../../types/interfaces/IStyles'
import { SuperadminInfo } from '../../../Components/superadmin/SuperadminInfo'
import { Route, Routes } from 'react-router-dom'
import { AddAdminPage } from './AddAdminPage'
import { EmployeeDetailsPage } from './EmployeeDetailsPage'

export const SettingsPage: React.FC = () => {
  return (
    <div className={getStyles(containerStyle)}>
      <Routes>
        <Route index element={
            <>
              <AllAdmins />
              <SuperadminInfo />
            </>
        }/>
        <Route path='addadmin' element={ <AddAdminPage /> }/>
        <Route path="admin/:id" element={<EmployeeDetailsPage />} />
      </Routes>
    </div>
  )
}

const containerStyle: BlockStyle = {
    background: 'bg-gray-100',
    spacing: 'pb-10'
}