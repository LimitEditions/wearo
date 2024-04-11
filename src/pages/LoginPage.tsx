import React from 'react'
import { AuthWrapper } from '../Components/authorization/AuthWrapper'
import { withAuthLogic } from '../Components/authorization/withAuthLogic'
import { LoginForm } from '../Components/authorization/LoginForm'

export const LoginPage = () => {
  const LoginWithLogic = withAuthLogic({ Component: LoginForm, type: 'login'});

  return (
    <AuthWrapper>
      <LoginWithLogic />
    </AuthWrapper>
  );
}
