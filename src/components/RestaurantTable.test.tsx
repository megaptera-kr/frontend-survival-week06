import { screen, render } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

jest.mock('../hooks/useFetchRestaurants');

describe('ComponentTest: RestaurantTable', () => {
  it('rendering correctly', () => {
    const mockCategoryName = '';
    const mockRestaurantName = '';

    render(
      <RestaurantTable
        categoryName={mockCategoryName}
        restaurantName={mockRestaurantName}
      />,
    );

    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
  });
});
