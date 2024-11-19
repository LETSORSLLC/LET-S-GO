const request = require('supertest');
const express = require('express');
const routes = require('../routes/index');

const app = express();
app.use('/', routes);

test('GET / should return "Hello, world!"', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe("Hello, world!");
  expect(response.status).toBe(200);
});
