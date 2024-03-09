import { render, waitFor, screen } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('FilterableRestaurantTable', () => {
  it('renders restaurants', async () => {
    render(<FilterableRestaurantTable />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/전체/);
      screen.getByText('김밥(3,000원)');
      screen.getByText('혹등고래카레');
    });
  });
});
