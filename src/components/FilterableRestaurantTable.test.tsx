import { render, screen, waitFor } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('<FilterableRestaurantTable />', () => {
  it('render filterable restaurant table', async () => {
    render(<FilterableRestaurantTable />);

    screen.getByText(/식당 이름/);
    screen.getByText(/종류/);

    await waitFor(() => {
      expect(screen.getAllByText(/Restaurant/)).toHaveLength(4);
    });
  });
});
