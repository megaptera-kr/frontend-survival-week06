import { rest } from 'msw';
import { Path } from '../../api';
import restaurants from '../../fixtures/restaurants';
import receipt from '../../fixtures/receipt';
import { GetOrdersPayload, PostOrdersPayload } from '../../types';
import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  // 식당 목록 불러오는 API
  rest.get(`${BASE_URL}${Path.restaurants}`, (req, res, ctx) => res(ctx.status(200), ctx.json({
    message: 'Success',
    data: restaurants,
    status: 200,
  }))),
  rest.post<PostOrdersPayload>(`${BASE_URL}${Path.orders}`, (req, res, ctx) => res(ctx.status(200), ctx.json({ id: fixtures.receipt.id }))),
  rest.get<GetOrdersPayload>(`${BASE_URL}${Path.getOrders.replace(':id', 'RECEIPT_ID')}`, (req, res, ctx) => res(ctx.status(200), ctx.json({
    order: fixtures.receipt,
  }))),
];

console.log(`${BASE_URL}${Path.getOrders.replace(':id', 'RECEIPT_ID')}`);

export default handlers;
