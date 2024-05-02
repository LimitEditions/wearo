import React from 'react'
import { AllAdmins } from '../Components/superadmin/AllAdmins'
import getStyles from '../utils/getStyles'
import { BlockStyle } from '../types/interfaces/IStyles'
import { SuperadminInfo } from '../Components/superadmin/SuperadminInfo'

export const SuperadminSettingsPage: React.FC = () => {
  return (
    <div className={getStyles(containerStyle)}>
        <AllAdmins />
        <SuperadminInfo />
    </div>
  )
}

const containerStyle: BlockStyle = {
    background: 'bg-gray-100',
    spacing: 'pb-10'
}