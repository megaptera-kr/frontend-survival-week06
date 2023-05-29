import { render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import RestaurantTable from './RestaurantTable';

describe('<RestaurantTable />', () => {
  const { restaurants } = fixtures;

  it('render restaurant list', () => {
    render(<RestaurantTable restaurants={restaurants} />);

    screen.getByText(/Restaurant-11/);
    expect(screen.getAllByText(/Category-02/)).toHaveLength(2);

    screen.getByText(/Menu-05/);
    screen.getByText(/14,000원/);
  });
});
