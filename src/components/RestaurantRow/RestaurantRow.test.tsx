import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantRow from '.';
import fixture from '../../../fixtures';
import { OrdersType } from '../../types/ordersType';

const context = describe;
describe('RestaurantRow 컴포넌트', () => {
  const restaurant = fixture.restaurants[0];

  beforeEach(() => {
    localStorage.clear();
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

  context('메뉴의 선택 버튼을 클릭하면', () => {
    it('로컬스토리지에 등록된 orders에 선택한 menu, totalPrice 변경된다.', () => {
      const firstSelectButton = screen.getAllByRole('button')[0];
      fireEvent.click(firstSelectButton);

      const localOrders = localStorage.getItem('orders') ?? '';
      const orders = JSON.parse(localOrders) as OrdersType;
      expect(orders.menu[0].name).toBe('짜장면');
      expect(orders.totalPrice).toBe(8000);
    });
  });
});
