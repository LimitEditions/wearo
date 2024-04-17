import { createContext, useState } from "react";
import { AuthContextType } from "../types/AuthContextType";
import { IAuthMeList } from "../types/interfaces/ApiResponses/IAuthMeList";
import { UserType } from "../api/data-contracts";


// Создаем контекст с типом AuthContextType и начальными значениями по умолчанию
const info = {
  status: false,
  guid: '',
  userName: '',
  firstName: null,
  secondName: null,
  type: UserType.Unauthorized,
};

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: info,
    setAuth: () => { },
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [isAuthenticated, setAuth] = useState<IAuthMeList>(info);
    
    return (
      <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
};
  
export default AuthContext;
