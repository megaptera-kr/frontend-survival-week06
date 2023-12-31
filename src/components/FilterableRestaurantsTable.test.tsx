import { render, screen, waitFor } from '@testing-library/react';
import FilterableRestaurantsTable from './FilterableRestaurantsTable';

describe('FilterableRestaurantsTable', () => {
  test('가게 이름과 메뉴가 보임', () => {
    // When
    render(<FilterableRestaurantsTable />);

    // Then
    waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/짜장면/);
    });
  });
});
