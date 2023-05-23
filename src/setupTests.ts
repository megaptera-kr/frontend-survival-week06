import 'reflect-metadata';
import 'whatwg-fetch';
import { container } from 'tsyringe';
import server from './mocks/server';

beforeEach(() => {
  container.clearInstances();
});
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
