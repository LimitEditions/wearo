export type AuthContextType = {
    isAuthenticated: boolean; // флаг, показывающий, аутентифицирован ли пользователь
    setAuth: (auth: boolean) => void; // функция для изменения значения isAuthenticated
};