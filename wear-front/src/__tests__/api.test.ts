import { Api } from "../api/Api"
import {describe, expect} from '@jest/globals';
import { AuthModel, ProblemDetails } from "../api/data-contracts";

describe('testing authorization', () => {
    let api: Api;

    beforeEach(() => {
        api = new Api({baseURL: 'http://vne.su:8081/'})
    })

    it('testing authCreate', async () => {
        const authModel: AuthModel = {username: 'admin', password: 'admin'}
        const response: ProblemDetails = await api.authCreate(authModel);

        expect(response.data.type).toBe('Admin')
    })
})