// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const restaurants = [
      {
        id: '1',
        category: '중식',
        name: '메가반점',
        menu: [{ id: '1', name: '짜장면', price: 8000 }],
      },
    ];

    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),
];

export default handlers;
