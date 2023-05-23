import { screen, render } from '@testing-library/react';
import RestaurantTable from './RestaurantTable';
import fixtures from '../../../fixtures';

describe('RestaurantTable', () => {
  const { restaurants } = fixtures;
  const renderComponent = () => render(<RestaurantTable restaurants={restaurants} />);

  it('RestaurantTable render column', () => {
    renderComponent();
    expect(screen.getByText('식당 이름')).toBeInTheDocument();
    expect(screen.getByText('종류')).toBeInTheDocument();
    expect(screen.getByText('메뉴')).toBeInTheDocument();
  });

  it('RestaurantTable render row', () => {
    renderComponent();
    expect(screen.getByText('중식')).toBeInTheDocument();
    expect(screen.getByText('메리김밥')).toBeInTheDocument();
    expect(screen.getByText('혹등고래카레')).toBeInTheDocument();
  });
});
