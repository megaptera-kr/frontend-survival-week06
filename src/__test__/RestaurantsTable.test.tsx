import { render, screen } from '@testing-library/react';

import RestaurantTable from '../components/RestaurantTable';

import fixtures from '../../fixtures';

describe('RestaurantTable', () => {
  const { restaurants } = fixtures;

  it('Render without errors', () => {
    render((<RestaurantTable restaurants={restaurants} />));
    expect(screen.getByText('메가반점')).toBeInTheDocument();
  });
});
