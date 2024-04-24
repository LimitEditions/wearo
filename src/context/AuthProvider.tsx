import { createContext, useState } from "react";
import { AuthContextType } from "../types/AuthContextType";
import { IAuthMeList } from "../types/interfaces/ApiResponses/IAuthMeList";
import { UserType } from "../api/data-contracts";


// Создаем контекст с типом AuthContextType и начальными значениями по умолчанию
export const defaultContext = {
  status: false,
  guid: '',
  userName: '',
  firstName: null,
  secondName: null,
  type: UserType.Unauthorized,
};

const AuthContext = createContext<AuthContextType>({
    isAuth: defaultContext,
    setAuth: () => { },
});

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [isAuth, setAuth] = useState<IAuthMeList>(defaultContext);
    
    return (
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
};
  
export default AuthContext;
