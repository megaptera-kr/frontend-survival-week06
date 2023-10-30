import { render, screen } from '@testing-library/react';
import RestaurantTable from './RestaurantTable';
import fixtures from '../../fixtures';

describe('RestaurantTable', () => {
  const { restaurants } = fixtures;

  it('renders RestaurantTable', () => {
    render((
      <RestaurantTable restaurants={restaurants} />
    ));

    screen.getByText(/메가반점/);
    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
    screen.getByText(/메리김밥/);
    screen.getByText(/혹등고래카레/);
  });
});
