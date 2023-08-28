import { render, screen } from '@testing-library/react';

import RestaurantsTableBody from './RestaurantsTableBody';

import fixtures from '../../fixtures';

const context = describe;
describe('RestaurantsTableBody', () => {
  context('restaurants가 주어지면', () => {
    it('주어진 restaurants을 렌더링한다', () => {
      render((
        <table>
          <RestaurantsTableBody
            restaurants={fixtures.restaurants}
          />
        </table>
      ));

      screen.getByText(/메가반점/);
      screen.getByText(/중식/);
      screen.getByText(/짜장면/);
    });
  });
});
