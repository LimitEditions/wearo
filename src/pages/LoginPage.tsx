import React from 'react'
import { AuthWrapper } from '../Components/authorization/AuthWrapper'
import { Login } from '../Components/authorization/Login'

export const LoginPage = () => {
  return (
    <AuthWrapper>
      <Login />
    </AuthWrapper>
  )
}
