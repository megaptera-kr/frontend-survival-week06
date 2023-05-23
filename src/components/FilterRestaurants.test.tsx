import { fireEvent, render, screen } from '@testing-library/react';
import FilterRestaurants from './FilterRestaurants';
import filterCategories from '../utils/filterCategories';
import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';

const context = describe;

describe('FilterRestaurants ', () => {
  const restaurants = useFetchRestaurant();
  const restaurantsCategories = filterCategories(restaurants);
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  function renderFilterRestaurants() {
    return render(
      <FilterRestaurants
        restaurantsCategories={restaurantsCategories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />,
    );
  }

  context('when render component', () => {
    it('show label, button text', () => {
      renderFilterRestaurants();

      expect(screen.getByLabelText('검색')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
    });
  });

  context('when write input text', () => {
    it('write any text', () => {
      renderFilterRestaurants();

      const input = screen.getByPlaceholderText<HTMLInputElement>('이름 검색');
      fireEvent.change(input, { target: { value: 'test' } });
      expect(input.value).toBe('test');

      fireEvent.change(input, { target: { value: '' } });
      expect(input.value).toBe('');
    });
  });
});
