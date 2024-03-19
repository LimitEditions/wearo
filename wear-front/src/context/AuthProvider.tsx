import { createContext, useState } from "react";
import { AuthContextType } from "../types/AuthContextType";

// Создаем контекст с типом AuthContextType и начальными значениями по умолчанию
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setAuth: () => { },
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [isAuthenticated, setAuth] = useState<boolean>(false);
    
    return (
      <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
};
  
export default AuthContext;
