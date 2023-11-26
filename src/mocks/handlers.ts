import { rest } from 'msw';
import { getRataurantsURL } from '../api';
import restaurants from '../../fixtures/restaurants';

const handlers = [
  rest.get(`${getRataurantsURL}`, (_, res, ctx) => res(ctx.status(200), ctx.json({ restaurants }))),
];

export default handlers;
