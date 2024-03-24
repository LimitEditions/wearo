import { AxiosError, AxiosResponse } from "axios";

// export interface IApiError extends Error {
//     // можно добавить любые поля, которые понадобятся для обработки ошибок
//     resonse?: AxiosResponse
// };

export type IApiError = AxiosError | Error;
