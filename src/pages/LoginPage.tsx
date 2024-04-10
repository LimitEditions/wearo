import React from 'react'
import { AuthWrapper } from '../Components/authorization/AuthWrapper'
import { withAuthLogic } from '../Components/authorization/withAuthLogic'
import { LoginForm } from '../Components/authorization/LoginForm'
import { Login } from '../Components/authorization/Login'

export const LoginPage = () => {
  const initialUser = { username: '', password: '' };
  const LoginWithLogic = withAuthLogic({ Component: LoginForm, type: 'login', initialUser });

  return (
    <AuthWrapper>
      <LoginWithLogic />
    </AuthWrapper>
  );
}
