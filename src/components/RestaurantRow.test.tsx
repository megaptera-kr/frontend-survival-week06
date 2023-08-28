import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';

import RestaurantRow from './RestaurantRow';

describe('<RestaurantRow />', () => {
  const { restaurants } = fixtures;
  const restaurant = restaurants[0];

  it('render restaurant', () => {
    render(
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>,
    );

    screen.getByText(/Restaurant-01/);
    screen.getByText(/8,000원/);
    screen.getByText(/Menu-02/);
  });
});
