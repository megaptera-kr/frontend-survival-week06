import 'reflect-metadata';

import 'whatwg-fetch';

import server from './mocks/server';

beforeAll(() => {
  console.log('beforeAll');
  return server.listen({ onUnhandledRequest: 'warn' });
});

afterAll(() => {
  console.log('close');
  return server.close();
});

afterEach(() => {
  console.log('resetHandlers');
  return server.resetHandlers();
});
