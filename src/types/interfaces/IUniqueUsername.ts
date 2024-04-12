import { IApiError } from "./IApiError";

export interface IUniqueUsername {
    userData: boolean | unknown;
    isLoadingUser: boolean;
    userError: IApiError | null; 
};
