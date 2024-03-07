import { screen, render } from '@testing-library/react';

import RestaurantTableRow from './RestaurantTableRow';

import fixtures from '../../fixtures';

import Restaurant from '../types/RestaurantType';

describe('ComponentTest: RestaurantTableRow', () => {
  const { restaurants } = fixtures;
  const restaurant: Restaurant = restaurants[0];

  it('rendering correctly', () => {
    render(
      <table>
        <tbody>
          <RestaurantTableRow restaurant={restaurant} />
        </tbody>
      </table>,
    );

    screen.getByText(restaurant.name);
    screen.getByText(restaurant.category);
  });
});
