import { render, screen } from '@testing-library/react';

import { restaurants } from '../../../fixtures';
import RestaurantsTable from './RestaurantsTable';

describe('Restaurants Table', () => {
  function renderRestaurantsTable() {
    return render(<RestaurantsTable
      restaurants={restaurants}
    />);
  }

  it('render correctly', () => {
    renderRestaurantsTable();

    expect(screen.getByText('한식'));
    expect(screen.getByText('중식'));
    expect(screen.getByText('일식'));
  });
});
