import { app } from '../src/app';
import supertest from 'supertest';

describe('test start', () => {
    const agent = supertest(app);
    test('test', async () => {
        const response = await agent.get('/hello-world');
        expect(response.status).toBe(200);
    })
})