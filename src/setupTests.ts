import 'reflect-metadata';

import 'whatwg-fetch';

import server from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
