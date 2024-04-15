import React from 'react'
import { AllAdmins } from './AllAdmins'
import getStyles from '../../utils/getStyles'
import { BlockStyle } from '../../types/interfaces/IStyles'

export const SuperadminSettingsPage = () => {
  return (
    <div className={getStyles(containerStyle)}>
        <AllAdmins />
    </div>
  )
}

const containerStyle: BlockStyle = {
    background: 'bg-gray-100'
}