import 'reflect-metadata';
import 'whatwg-fetch';

import server from './mocks/server';

/* MSW: start */
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
/* MSW: end */
