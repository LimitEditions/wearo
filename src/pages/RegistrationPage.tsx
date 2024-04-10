import React, { useRef } from 'react'
import { AuthWrapper } from '../Components/authorization/AuthWrapper'
import { Registration } from '../Components/authorization/Registration'
import { withAuthLogic } from '../Components/authorization/withAuthLogic';
import { RegistrationForm } from '../Components/authorization/RegistrationForm';

export const RegistrationPage = () => {
  const initialUser = {
    username: "",
    password: "",
    firstName: "",
    secondName: "",
  };
  const RegistrationWithLogic = withAuthLogic({ Component: RegistrationForm, type: 'reg', initialUser });
  return (
    <AuthWrapper>
      <RegistrationWithLogic/>
    </AuthWrapper>
  )
}
