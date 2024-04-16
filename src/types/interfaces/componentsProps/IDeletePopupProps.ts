import { Api } from "../../../api/Api";

export interface IDeletePopupProps {
    title: string,
    apiMethod: keyof Api<unknown>,
    handleClose: () => void,
}