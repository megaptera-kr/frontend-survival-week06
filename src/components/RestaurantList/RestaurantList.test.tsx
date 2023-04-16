import { render, screen, waitFor } from '@testing-library/react';
import RestaurantList from '.';

describe('<RestaurantList/>', () => {
  it('RestaurantStore에 restaurants이 있는 경우, 레스토랑 목록을 화면에 렌더링 해야 합니다.', async () => {
    // Given, When
    render(<RestaurantList />);

    // Then
    await waitFor(() => {
      const restaurant1 = screen.getByText(/메가반점/i);
      expect(restaurant1).toBeInTheDocument();
    });
  });

  it('RestaurantStore에 restaurants이 없는 경우, 레스토랑의 구분 카테고리만 화면에 렌더링 해야 합니다.', () => {
    // Given, When
    render(<RestaurantList />);

    const nameSection = screen.getByText(/식당 이름/i);
    const restaurant1 = screen.queryByText(/메가반점/i);

    // Then
    expect(nameSection).toBeInTheDocument();
    expect(restaurant1).not.toBeInTheDocument();
  });
});
