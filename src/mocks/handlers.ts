import { rest } from 'msw';

import { restaurants } from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ restaurants }),
  )),
];

export default handlers;
