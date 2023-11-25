import { render, screen } from '@testing-library/react';
import Resturants from './Resturants';

describe('Restaurants Component', () => {
  test('Resturants 은 렌더링 되면 레스토랑 목록을 그린다.', async () => {
    render(<Resturants />);
    const element = await screen.findByTestId('ResturantsList');
    expect(element).toBeInTheDocument();
  });
});
