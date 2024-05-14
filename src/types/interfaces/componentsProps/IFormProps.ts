import React from "react";
import { AuthModel, CreateUserModel, UserModel } from "../../../api/data-contracts";
import { IAuthCreate } from "../ApiResponses/IAuthCreate";
import { IApiError } from "../IApiError";
import { NavigateFunction } from "react-router-dom";

interface IFormProps<TUser, TData> {
    user: TUser,
    onSubmit: () => void,
    onChange: () => void,
    setRefs: (event: React.RefObject<HTMLInputElement>[]) => void;
    data: TData,
    error: IApiError,
    isLoading: boolean,
    type: "login" | "reg" | "createAdmin"
    modal: {
        mod: boolean,
        setMod: (event:boolean) => void,
        navigate: NavigateFunction
    }
};

export type ILoginFormProps = IFormProps<AuthModel, IAuthCreate>;
export type IRegistrationFormProps = IFormProps<CreateUserModel, UserModel>;
