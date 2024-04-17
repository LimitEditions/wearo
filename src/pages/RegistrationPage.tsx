import React from "react";
import { AuthWrapper } from "../Components/authorization/AuthWrapper";
import { withAuthLogic } from "../Components/common/hoc/withAuthLogic";
import { RegistrationForm } from "../Components/authorization/RegistrationForm";

export const RegistrationPage = () => {
  const RegistrationWithLogic = withAuthLogic({ Component: RegistrationForm, type: "reg" });
  
  return (
    <AuthWrapper>
      <RegistrationWithLogic />
    </AuthWrapper>
  );
};
