import { render, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('FilterableRestaurantTable', () => {
  it('FilterableRestaurantTable renfer', () => {
    const { restaurants } = fixtures;
    render(<FilterableRestaurantTable restaurants={restaurants} />);
    expect(screen.getByText(/짜장면/)).toBeInTheDocument();
    expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
  });
});
