import { render, screen } from '@testing-library/react';
import RestaurantItem from '.';
import restaurants from '../../../fixtures/restaurants';
import { Restaurant } from '../../types/restaurant';

describe('<RestaurantItem/>', () => {
  it('restaurant를 인자로 받은 경우, 해당 레스토랑 정보를 렌더링해야 합니다.', () => {
    // Given, When
    render(<RestaurantItem restaurant={restaurants[0] as Restaurant} style={undefined} />);

    const restaurantName = screen.getByText(/메가반점/i);
    const menu1 = screen.getByText(/짜장면 \(8,000원\)/i);
    const menu2 = screen.getByText(/짬뽕 \(5,000원\)/i);

    // Then
    expect(restaurantName).toBeInTheDocument();
    expect(menu1).toBeInTheDocument();
    expect(menu2).toBeInTheDocument();
  });

  it('인자로 받은 restaurant가 없는 경우, 레스토랑 정보가 렌더링되지 않아야 합니다.', () => {
    // Given, When
    render(<RestaurantItem restaurant={{} as Restaurant} style={undefined} />);

    const restaurantName = screen.queryByText(/메가반점/i);
    const menu1 = screen.queryByText(/짜장면 \(8,000원\)/i);
    const menu2 = screen.queryByText(/짬뽕 \(5,000원\)/i);

    // Then
    expect(restaurantName).not.toBeInTheDocument();
    expect(menu1).not.toBeInTheDocument();
    expect(menu2).not.toBeInTheDocument();
  });
});
