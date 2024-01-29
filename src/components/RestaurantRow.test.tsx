import { render, screen } from '@testing-library/react';
import RestaurantRow from './RestaurantRow';
import foods from '../../fixtures/foods';

describe('RestaurantRow', () => {
  const restaurant = {
    id: '1',
    category: '중식',
    name: '메가반점',
    menu: foods,
  };

  it('render RestaturantRow', () => {
    render(
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>,
    );
    expect(screen.getByText(/짜장면/)).toBeInTheDocument();
  });
});
