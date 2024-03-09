/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';

import restaurants from '../../fixtures/restaurants';

describe('Restaurant', () => {
  it('renders Restaurant information', () => {
    render(
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurants[0]} />
        </tbody>
      </table>
    );

    screen.getByText(/메가반점/);
    screen.getByText(/중식/);
    screen.getByText('짜장면(8,000원)');
  });
});
