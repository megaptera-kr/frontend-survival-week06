import { render, screen, waitFor } from '@testing-library/react';
import FilterableRestaurants from '.';

describe('FilterableRestaurants 컴포넌트', () => {
  beforeEach(() => {
    render(<FilterableRestaurants />);
  });
  it('짜장면을 렌더링합니다.', async () => {
    await waitFor(() => {
      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
    });
  });
});
