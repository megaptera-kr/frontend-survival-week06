import { render, screen, waitFor } from '@testing-library/react';
import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';
import RestaurantsTableBody from './RestaurantsTableBody';

const context = describe;

describe('RestaurantsTableBody ', () => {
  const restaurants = useFetchRestaurant();

  function renderRestaurantsTableBody() {
    render(
      <table>
        <tbody>
          <RestaurantsTableBody restaurants={restaurants} />
        </tbody>
      </table>,
    );
  }
  context('when render component', () => {
    it('show tbody content', async () => {
      renderRestaurantsTableBody();

      await waitFor(() => {
        expect(screen.getByText(/메가반점/)).toBeInTheDocument();
        expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
        expect(screen.getByText(/데브부엌/)).toBeInTheDocument();
      });
    });
  });
});
