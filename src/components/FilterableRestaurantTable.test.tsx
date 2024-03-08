import { render, screen } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

import useSearchField from '../hooks/useSearchField';

jest.mock('../hooks/useFetchCategories');
jest.mock('../hooks/useFetchRestaurants');

describe('ComponentTest: FilterableRestaurantTable', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders SearchBar and RestaurantTable correctly', () => {
    render(<FilterableRestaurantTable />);

    screen.getByLabelText('검색');
    screen.getByPlaceholderText('식당 이름...');
    screen.getByRole('button', { name: '전체' });
    screen.getByRole('button', { name: '한식' });
    screen.getByRole('button', { name: '일식' });
    screen.getByRole('button', { name: '중식' });

    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
    screen.getByText('짜장면');
  });

  // it('renders SearchBar and RestaurantTable correctly', () => {
  //   render(<FilterableRestaurantTable />);
  //   const mock = jest.mocked(useSearchField);
  //   mock.mockReturnValue(['', jest.fn()]);
  // });
});
