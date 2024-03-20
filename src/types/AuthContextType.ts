import { IAuthMeList } from "./interfaces/ApiResponses/IAuthMeList";

export type AuthContextType = {
    isAuthenticated: IAuthMeList;
    setAuth: (auth: IAuthMeList) => void;  // функция для изменения значения isAuthenticated
};
