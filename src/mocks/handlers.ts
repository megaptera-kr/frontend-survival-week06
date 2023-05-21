// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';

const handlers = [
  rest.get('/tests', (req, res, ctx) => {
    const restaurants = useFetchRestaurant();
    res(
      ctx.status(200),
      ctx.json(restaurants),
    );
  }),
];

export default handlers;
