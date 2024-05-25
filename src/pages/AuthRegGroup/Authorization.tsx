import React from "react";
import { AuthWrapper } from "../../Components/authorization/AuthWrapper";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { Button } from "../../Components/common/Button";
import getStyles from "../../utils/getStyles";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../../Components/common/ProtectedRoute";
import { LoginPage } from "./LoginPage";
import { RegistrationPage } from "./RegistrationPage";

export const Authorization = () => {
  const navigate = useNavigate();
  return (
    <ProtectedRoute>
      <Routes>
        <Route index element={
          <AuthWrapper>
            <div className={getStyles(divStyle)}>
              <Button showButton={true} onClick={() => navigate('./login')}>Войти</Button>
              <Button showButton={true} onClick={() => navigate('./registration')}>Зарегистрироваться</Button>
            </div>
          </AuthWrapper>
        }/>
        <Route path='login' element={ <LoginPage /> } />
        <Route path='registration' element={ <RegistrationPage />  } />
      </Routes>
    </ProtectedRoute>
  );
};

const divStyle: BlockStyle = {
  blockSize: 'w-full',
  container: 'flex flex-col',
  spacing: 'gap-3 mt-5'
};
