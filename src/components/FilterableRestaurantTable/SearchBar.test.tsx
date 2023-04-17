import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const setRestaurantName = jest.fn();
  const setMenuCategory = jest.fn();
  const restaurantName = '';
  const categories = ['중식', '한식', '일식'];
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => render(
    <SearchBar
      categories={categories}
      restaurantName={restaurantName}
      setRestaurantName={setRestaurantName}
      setMenuCategory={setMenuCategory}
    />,
  );

  it('SearchBar label render', () => {
    renderComponent();
    screen.getByText('검색');
    screen.getByPlaceholderText('식당 이름');
  });

  it('SearchBar Component Button render', () => {
    renderComponent();
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('SearchBar Button Click', () => {
    renderComponent();
    categories.forEach((category) => {
      fireEvent.click(screen.getByText(category));
      expect(setMenuCategory).toBeCalledWith(category);
    });
  });
});
