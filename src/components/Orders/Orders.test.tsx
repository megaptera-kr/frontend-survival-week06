import { render, screen } from '@testing-library/react';
import Orders from '.';
import fixture from '../../../fixtures';
import { OrdersType } from '../../types/ordersType';

const cart:OrdersType = {
  menu: [],
  totalPrice: 0,
};

const mockFunctions = {
  removeCart: jest.fn(),
};

jest.mock('../../hooks/useCartStore', () => () => [{ cart }, mockFunctions]);

const context = describe;
describe('Orders 컴포넌트', () => {
  context('orders의 menu가 빈배열 이라면', () => {
    beforeEach(() => {
      render(<Orders />);
    });

    it('주문내역0개, 총 결제 예상 금액 0원, 주문하기 버튼, 취소하기 버튼을 렌더링합니다.', () => {
      expect(screen.getByText(/주문내역/)).toBeInTheDocument();
      expect(screen.getByText(/총 결제 예상 금액 0원/)).toBeInTheDocument();
    });
  });

  context('orders의 menu가 빈배열이 아니면', () => {
    beforeEach(() => {
      cart.menu = [fixture.food];
      cart.totalPrice = fixture.food.price;
    });

    it('menu 리스트를 렌더링한다.', () => {
      render(<Orders />);
      screen.getByText(/짜장면/);
      screen.getByText(/총 결제 예상 금액 8,000원/);
    });
  });
});
