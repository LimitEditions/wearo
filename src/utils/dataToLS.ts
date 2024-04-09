import { IAuthCreate } from "../types/interfaces/ApiResponses/IAuthCreate";
import { encrypt } from "./encryption";
import { calculateExpirationTime } from "./expirationTime";

// По ключам из объекта tokenData переносим все данные в localStorage
// при этом шифруем всю инфу, а времена истечения токенов предварительно переводим в даты
// по нулевому меридиану (без учета часового пояса)
export function dataToLS(data: object): void {
    const tokenData = data as IAuthCreate; //дополнительно типизируем данные приходящие с сервера в зависимости от метода обращения
    Object.keys(tokenData)
    .forEach(e => {
        Number.isInteger(tokenData[e]) ? 
        encrypt(e, calculateExpirationTime(tokenData[e])):
        encrypt(e, tokenData[e]);
    });
};
