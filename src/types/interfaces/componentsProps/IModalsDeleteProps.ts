import { Api } from "../../../api/Api";

export interface IModalsDeleteProps {
    apiMethod: keyof Api<unknown>,
    isOpen1: boolean,
    setIsOpen1: (event: boolean) => void;
    // Сообщение формата "Вы уверены, что хотите удалить ....
    messageSure: string, 
    // Сообщение об успехе какого-то действия
    messageSuccess: string,
    idForDelete?: string
}