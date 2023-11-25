import { rest } from 'msw';
import { Path } from '../../api';
import restaurants from '../../fixtures/restaurants';
import receipt from '../../fixtures/receipt';
import { PostOrdersPayload } from '../../types';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  // 식당 목록 불러오는 API
  rest.get(`${BASE_URL}${Path.restaurants}`, (req, res, ctx) => res(ctx.status(200), ctx.json({
    message: 'Success',
    data: restaurants,
    status: 200,
  }))),
  rest.post<PostOrdersPayload>(`${BASE_URL}${Path.orders}`, (req, res, ctx) => res(ctx.status(200), ctx.json({
    message: 'Success',
    data: receipt,
    status: 200,
  }))),
];

export default handlers;
