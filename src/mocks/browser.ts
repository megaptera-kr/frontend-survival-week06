// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';
import handlers from './handler';

const worker = setupWorker(...handlers);

export default worker;
