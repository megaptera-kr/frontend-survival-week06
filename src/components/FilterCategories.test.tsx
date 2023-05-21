import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantsTable from './RestaurantsTable';
import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';
import FilterCategories from './FilterCategories';
import filterCategories from '../utils/filterCategories';

const context = describe;

describe('FilterCategories ', () => {
  const restaurants = useFetchRestaurant();
  const restaurantsCategories = filterCategories(restaurants);
  const setFilterCategory = jest.fn();

  function renderFilterCategories() {
    render(<FilterCategories
      restaurantsCategories={restaurantsCategories}
      setFilterCategory={setFilterCategory}
    />);
  }
  context('when render component', () => {
    it('show categories', () => {
      renderFilterCategories();

      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '한식' })).toBeInTheDocument();
    });
  });

  context('when click category', () => {
    it('click category', () => {
      renderFilterCategories();

      fireEvent.click(screen.getByRole('button', { name: '중식' }));
      expect(setFilterCategory).toBeCalledTimes(1);

      fireEvent.click(screen.getByRole('button', { name: '한식' }));
      expect(setFilterCategory).toBeCalledTimes(2);
    });
  });
});
