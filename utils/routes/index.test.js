const request = require('supertest');
const express = require('express');
const routes = require('./index');

const app = express();
app.use('/', routes);

test('GET /example should return "Hello, world!"', async () => {
    const response = await request(app).get('/example');
    expect(response.text).toBe('Hello, world!');
});
