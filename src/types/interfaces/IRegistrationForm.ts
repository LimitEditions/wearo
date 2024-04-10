import { LegacyRef } from "react";
import { CreateUserModel, UserModel } from "../../api/data-contracts";
import { IApiError } from "./IApiError";

export interface IRegistrationFormProps {
    user: CreateUserModel,
    onSubmit: () => void,
    onChange: () => void,
    inputNameRef:  LegacyRef<HTMLInputElement> | undefined,
    inputPasswordRef:  LegacyRef<HTMLInputElement> | undefined,
    data: UserModel,
    error: IApiError,
    isLoading: boolean
}