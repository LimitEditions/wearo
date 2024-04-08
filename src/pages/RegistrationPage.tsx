import React from 'react'
import { AuthWrapper } from '../Components/authorization/AuthWrapper'
import { Registration } from '../Components/authorization/Registration'

export const RegistrationPage = () => {
  return (
    <AuthWrapper>
      <Registration />
    </AuthWrapper>
  )
}
