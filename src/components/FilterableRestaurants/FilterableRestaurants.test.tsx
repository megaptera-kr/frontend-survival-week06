import { screen, render } from '@testing-library/react';
import FilterableRestaurants from '.';

describe('FilterableRestaurants 컴포넌트', () => {
  it('FilterableRestaurants 렌더링합니다.', () => {
    render(<FilterableRestaurants />);
    expect(screen.getByText('FilterableRestaurants')).toBeInTheDocument();
  });
});
