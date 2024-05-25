import React from "react";
import { AuthWrapper } from "../../Components/authorization/AuthWrapper";
import { withAuthLogic } from "../../Components/common/hoc/withAuthLogic";
import { RegistrationForm } from "../../Components/authorization/RegistrationForm";

export const RegistrationPage = () => {
  // Форма для регистрации нового пользователя, обернутая в HOC с базовой логикой авторизации/регистрации
  const Registration = withAuthLogic({ Component: RegistrationForm, type: "reg" });
  
  return (
    <AuthWrapper>
      <Registration />
    </AuthWrapper>
  );
};
