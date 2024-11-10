const { exampleFunction } = require('../controllers/exampleController.js');
const httpMocks = require('node-mocks-http');

test('exampleFunction should send "Hello, world!"', () => {
  const req = httpMocks.createRequest();
  const res = httpMocks.createResponse();
  exampleFunction(req, res);
  expect(res._getData()).toBe("Hello, world!");
});
