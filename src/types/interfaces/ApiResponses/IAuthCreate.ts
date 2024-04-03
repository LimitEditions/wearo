export interface IAuthCreate {
    guid: string,
    refreshToken: string,
    refreshTokenExpireIn: number,
    token: string,
    tokenExpireIn: number,
    [key: string]: any
};
