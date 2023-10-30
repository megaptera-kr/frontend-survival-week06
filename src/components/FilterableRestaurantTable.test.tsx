import { render, screen } from '@testing-library/react';
import FilterableRestaurantTable from './FilterableRestaurantTable';
import fixtures from '../../fixtures';

describe('FilterableRestaurantTable', () => {
  const { restaurants } = fixtures;

  it('renders FilterableRestaurantTable', () => {
    render((
      <FilterableRestaurantTable restaurants={restaurants} />
    ));

    screen.getByText(/식당 이름/);
    screen.getByText(/종류/);
    screen.getByText(/메뉴/);
    screen.getByText(/메가반점/);
  });
});
