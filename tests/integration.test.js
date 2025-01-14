const request = require('supertest');
const app = require('../src/app/server');

describe('Integration Test: API Endpoints', () => {
  it('should return product list', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('products');
  });
});
