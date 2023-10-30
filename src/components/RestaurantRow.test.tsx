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
        name: '김밥',
        price: 3_000,
      },
    ],
  };

  it('renders RestaurantRow', () => {
    render((
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>
    ));

    screen.getByText(/메리김밥/);
  });
});
