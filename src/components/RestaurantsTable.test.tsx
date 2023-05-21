import { render, screen } from '@testing-library/react';
import RestaurantsTable from './RestaurantsTable';
import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';

const context = describe;

describe('RestaurantsTable ', () => {
  const restaurants = useFetchRestaurant();
  function renderRestaurantsTable() {
    render(<RestaurantsTable restaurants={restaurants} />);
  }
  context('when render component', () => {
    it('show thead titles', () => {
      renderRestaurantsTable();

      expect(screen.getByText(/이름/)).toBeInTheDocument();
      expect(screen.getByText(/종류/)).toBeInTheDocument();
      expect(screen.getByText(/메뉴/)).toBeInTheDocument();
    });

    it('show tbody content', () => {
      renderRestaurantsTable();

      expect(screen.getByText(/메가반점/)).toBeInTheDocument();
      expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
      expect(screen.getByText(/데브부엌/)).toBeInTheDocument();
    });
  });
});
