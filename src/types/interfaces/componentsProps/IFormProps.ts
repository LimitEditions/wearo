import React from "react";
import { AuthModel, CreateUserModel, UserModel } from "../../../api/data-contracts";
import { IAuthCreate } from "../ApiResponses/IAuthCreate";
import { IApiError } from "../IApiError";

interface IFormProps<TUser, TData> {
    user: TUser,
    onSubmit: () => void,
    onChange: () => void,
    setRefs: (event: React.RefObject<HTMLInputElement>[]) => void;
    data: TData,
    error: IApiError,
    isLoading: boolean,
};

export type ILoginFormProps = IFormProps<AuthModel, IAuthCreate>;
export type IRegistrationFormProps = IFormProps<CreateUserModel, UserModel>;
