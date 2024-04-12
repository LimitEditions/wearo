import { LegacyRef, RefObject } from "react";
import { AuthModel, CreateUserModel, UserModel } from "../../../api/data-contracts";
import { IAuthCreate } from "../ApiResponses/IAuthCreate";
import { IApiError } from "../IApiError";

interface IFormProps<TUser, TData> {
    user: TUser,
    onSubmit: () => void,
    onChange: () => void,
    inputNameRef: 
        RefObject<HTMLInputElement> |
        null,
    inputPasswordRef: LegacyRef<HTMLInputElement> | undefined,
    data: TData,
    error: IApiError,
    isLoading: boolean,
    changeIsUniqueUsername?: (value: boolean) => void
};

export type ILoginFormProps = IFormProps<AuthModel, IAuthCreate>;
export type IRegistrationFormProps = IFormProps<CreateUserModel, UserModel>;
