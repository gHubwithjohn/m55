const request = require('supertest');
const app = require('../src/app/server');

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to the M55 Online Shopping App!');
  });
});
