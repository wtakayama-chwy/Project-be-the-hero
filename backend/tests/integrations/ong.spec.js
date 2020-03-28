const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        // Must execute a migration, if not tests won't find tables - must be async 'cause last a little
        await connection.migrate.rollback(); // unmake your migrations - avoiding OVERWHELMED your DB - RESET DB!!
        await connection.migrate.latest(); 
    });

    afterAll(async () => {
        await connection.destroy(); // Destroy connection with your DB avoiding any leaking
    });
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ribbon2",
                email: "contato@teste.com",
                whatsapp: "11912344321",
                city: "São Paulo",
                uf: "SP"
            });
        expect(response.body).toHaveProperty('id'); // Expect to have a id inside your Test DB 
        expect(response.body.id).toHaveLength(8); // && Expecto have 8 characters
    });
});