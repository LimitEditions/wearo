import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';


const ProtectedRoute: React.FC<{children: JSX.Element}> = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    if (isAuthenticated.status) {
        // Если пользователь авторизован, перенаправляем его с страниц регистрации или логина
        // на главную страницу или страницу профиля, например
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children; // Если не авторизован, рендерим запрашиваемый компонент
};

export default ProtectedRoute;
