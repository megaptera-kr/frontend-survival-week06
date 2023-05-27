// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const restaurants = [
      {
        id: '1',
        category: 'Category-01',
        name: 'Restaurant-01',
        menu: [
          {
            id: '1',
            name: 'Menu-01',
            price: 8000,
          },
          {
            id: '2',
            name: 'Menu-02',
            price: 10000,
          },
        ],
      },
      {
        id: '2',
        category: 'Category-02',
        name: 'Restaurant-02',
        menu: [
          {
            id: '1',
            name: 'Menu-03',
            price: 12000,
          },
          {
            id: '2',
            name: 'Menu-04',
            price: 14000,
          },
        ],
      },
    ];

    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),
];

export default handlers;
