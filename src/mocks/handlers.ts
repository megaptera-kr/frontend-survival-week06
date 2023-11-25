import { rest } from 'msw';
import { baseURL } from '../api';
import restaurants from '../../fixtures/restaurants';

const handlers = [
  rest.get(`${baseURL}/restaurants`, (_, res, ctx) => res(ctx.status(200), ctx.json({ restaurants }))),
];

export default handlers;
