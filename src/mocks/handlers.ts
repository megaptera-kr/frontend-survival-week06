/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const restaurants = [
      {
        id: 'RESTAURANT_01',
        category: '중식',
        name: '메가반점',
        menu: [{
          id: 'FOOD_01',
          name: '짜장면',
          price: 8_000,
        }],
      },
      {
        id: 'RESTAURANT_02',
        category: '한식',
        name: '메리김밥',
        menu: [
          {
            id: 'FOOD_02',
            name: '제육김밥',
            price: 5_500,
          },
        ],
      },
      {
        id: 'RESTAURANT_03',
        category: '일식',
        name: '데브부엌',
        menu: [
          {
            id: 'FOOD_03',
            name: '갈비탕',
            price: 11_000,
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
