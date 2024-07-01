import {
  render, screen,
} from '@testing-library/react';
import RestaurantRow from '.';
import fixture from '../../../fixtures';
import { OrdersType } from '../../types/ordersType';

const cart:OrdersType = {
  menu: [],
  totalPrice: 0,
};

jest.mock('../../hooks/useCartStore', () => () => [{ cart }]);

const context = describe;
describe('RestaurantRow 컴포넌트', () => {
  const restaurant = fixture.restaurants[0];

  beforeEach(() => {
    render((
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>
    ));
  });

  context('restaurant 데이터를 props로 전달 받으면', () => {
    it('restaurant의 name, category가 렌더링된다.', () => {
      expect(screen.getByText(/메가반점/));
      expect(screen.getByText(/중식/));
    });

    it('restaurant의 menu 배열 길이만큼 item을 렌더링한다.', () => {
      const menuItems = screen.getAllByRole('listitem');
      expect(menuItems).toHaveLength(restaurant.menu.length);
    });
  });
});
