import { render, screen } from '@testing-library/react';

import FilteredRestaurantTable from './FilteredRestaurantTable';
import fixtures from '../fixtures';

describe('FilteredRestaurantTable', () => {
  const { restaurants } = fixtures;

  it('renders FilteredRestaurantTable', () => {
    render(<FilteredRestaurantTable restaurants={restaurants} />);

    screen.getByText(/메가반점/);
    screen.getByText(/메리김밥/);
    screen.getByText(/혹등고래카레/);
  });
});
