import { render, screen } from '@testing-library/react';

import FilterableRestaurants from './FilterableRestaurants';

describe('Filterable Restaurants', () => {
  it('render correctly', async () => {
    render(<FilterableRestaurants />);

    await screen.findByText(/짜장면/);
    await screen.findByText(/짬뽕/);
  });
});
