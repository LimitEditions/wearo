import { LegacyRef } from "react";
import { AuthModel } from "../../../api/data-contracts";
import { IAuthCreate } from "../ApiResponses/IAuthCreate";
import { IApiError } from "../IApiError";

export interface IloginFormProps {
    user: AuthModel,
    onSubmit: () => void,
    onChange: () => void,
    inputNameRef:  LegacyRef<HTMLInputElement> | undefined,
    inputPasswordRef:  LegacyRef<HTMLInputElement> | undefined,
    data: IAuthCreate,
    error: IApiError,
    isLoading: boolean
}