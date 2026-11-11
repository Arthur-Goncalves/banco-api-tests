const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

describe('Login API Tests', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando as credenciais forem válidas', async () => {
            const bodyLogin = { ...postLogin }
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        })
    })
})