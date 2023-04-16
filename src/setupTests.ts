/* eslint-disable import/no-extraneous-dependencies */
import 'reflect-metadata';
import 'whatwg-fetch';

import server from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
