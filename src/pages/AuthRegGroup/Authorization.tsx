import React from "react";
import { AuthWrapper } from "../../Components/authorization/AuthWrapper";
import { Button } from "../../Components/common/Button";
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
                        <div className='w-full flex flex-col gap-3 mt-5'>
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
