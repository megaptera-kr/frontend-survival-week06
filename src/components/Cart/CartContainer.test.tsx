import { render, screen } from '@testing-library/react';

import CartContainer from './CartContainer';

import fixtures from '../../../fixtures';
import Menu from '../../types/Menu';

const state: { cart: Menu[] } = {
  cart: [],
};

jest.mock('../../hooks/useCartStore', () => () => [state]);

const context = describe;

describe('CartContainer', () => {
  it('카트 주문내역 및 금액 표시', () => {
    render(<CartContainer />);

    screen.getByText(/주문내역/);
    screen.getByText(/총 결제 예상금액/);
  });

  context('선택된 메뉴가 없을 때', () => {
    beforeEach(() => {
      state.cart = [];
    });

    it('0개 표시', () => {
      render(<CartContainer />);

      screen.getByText(/0개/);
    });
  });

  context('메뉴를 선택했을 때', () => {
    beforeEach(() => {
      state.cart = fixtures.cart;
    });

    it('메뉴 이름과 수를 표기', () => {
      render(<CartContainer />);

      fixtures.cart.forEach((menu) => {
        screen.getByText(new RegExp(menu.name));
      });

      screen.getByText(/2개/);
    });
  });
});
