import { rest } from 'msw';
import restaurants from '../../fixtures/restaurants';
import receipt from '../../fixtures/receipt';

const API_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${API_URL}/restaurants`, (_, res, ctx) => res(
    ctx.json(restaurants),
  )),
  rest.post(`${API_URL}/orders`, async (req, res, ctx) => res(
    ctx.status(201),
    ctx.json(receipt),
  )),
];

export default handlers;
