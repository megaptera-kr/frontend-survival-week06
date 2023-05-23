import { render, screen } from '@testing-library/react';
import RestaurantRow from './RestaurantRow';

describe('RestaurantRow', () => {
  const restaurant = {
    id: 'RESTAURANT_02',
    category: '한식',
    name: '메리김밥',
    menu: [
      {
        id: 'FOOD_03',
        name: '짜장면',
        price: 3_000,
      },
    ],
  };

  it('renders restaurant information', () => {
    render((
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>
    ));

    screen.getByText(/한식/);
    screen.getByText(/메리김밥/);
    screen.getByText(/짜장면/);
    screen.getByText(/3,000원/);
  });
});
