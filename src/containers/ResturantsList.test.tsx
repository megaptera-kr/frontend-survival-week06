import { render, screen } from '@testing-library/react';
import ResturantsList from './ResturantsList';
import restaurants from '../../fixtures/restaurants';
import { RestaurantList } from '../../types';

describe('RestaurantsList Component', () => {
  test('RestaurantsList 은 식당 목록 데이터가 있다면 레스토랑 목록을 그린다.', async () => {
    render(<ResturantsList resturantsList={restaurants as RestaurantList} />);
    const element = await screen.getByTestId('ResturantsList');

    expect(element).toBeInTheDocument();
  });
});
