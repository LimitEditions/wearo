import { Api } from "../api/Api"
import {describe, expect} from '@jest/globals';
import { AuthModel, ColorModel, ProblemDetails } from "../api/data-contracts";

describe('testing authorization', () => {
    let api: Api = new Api()
    let token: string;

    async function getAuthToken(): Promise<string> {
        const res = await api.authCreate({username: 'admin', password: 'admin'});
        return `Bearer ${res.data.token}`;
    }

    beforeEach(async () => {
        api = new Api({baseURL: 'http://vne.su:8081/'});
        token = await getAuthToken();
    })

    it('testing authCreate', async () => {
        const authModel: AuthModel = {username: 'admin', password: 'admin'}
        const response: ProblemDetails = await api.authCreate(authModel);

        expect(response.status).toBe(200)
    })

    it('testing authMeList', async () => {
        const response: ProblemDetails = await api.authMeList({headers: { Authorization: token }})

        expect(response.data.type).toBe('Admin')
    })

    it('testing authRefreshTokenCreate', async () => {
        const authCreate = await api.authCreate({username: 'admin', password: 'admin'});
        const refreshToken = authCreate.data.refreshToken;
        const token = authCreate.data.token;
        const authMeList = await api.authMeList({headers: { Authorization: `Bearer ${token}` }});
        const guid = authMeList.data.guid;

        const response: ProblemDetails = await api.authRefreshTokenCreate({refreshToken: refreshToken, userGuid: guid}, {headers: { Authorization: `Bearer ${token}` }})

        expect(response.data.token).toBeDefined()
    })
})


describe('testing Colors', () => {
    let api: Api = new Api()
    let token: string;

    async function getAuthToken(): Promise<string> {
        const res = await api.authCreate({username: 'superadmin', password: 'superadmin'});
        return `Bearer ${res.data.token}`;
    }

    beforeEach(async () => {
        api = new Api({baseURL: 'http://vne.su:8081/'});
        token = await getAuthToken();
    })

    it('testing colorsCreate', async () => {
        const color: ColorModel = {guid: '3fa85f64-5717-4562-b3fc-2c963f66afa7', hex: 'ffffff', name: 'White'};
        const response: ProblemDetails = await api.colorsCreate(color, {headers: { Authorization: token }});

        expect(response.data.name).toEqual('White')
    })

    
})