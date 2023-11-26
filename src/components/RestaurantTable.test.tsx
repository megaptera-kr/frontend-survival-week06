import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';
import fixtures from '../fixtures';

describe('RestaurantTable ', () => {
  const { restaurants } = fixtures;
  it('renders restaurantTable', async () => {
    render(<RestaurantTable restaurants={restaurants} />);

    screen.getByText(/식당 이름/);
    screen.getByText(/종류/);
    screen.getByText(/이름/);
  });
});
