// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import handlers from './handler';

const server = setupServer(...handlers);

export default server;
