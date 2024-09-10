import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';


const ProtectedRoute: React.FC<{children: JSX.Element}> = ({ children }) => {
    const { isAuth } = useContext(AuthContext);
    const location = useLocation();

    if (isAuth.status) {
        // Если пользователь авторизован, перенаправляем его со страниц регистрации/логина на страницу профиля
        return <Navigate to="/wardrobe/profile" state={{ from: location }} replace />;
    }

    return children; // Если не авторизован, рендерим запрашиваемый компонент
};

export default ProtectedRoute;
