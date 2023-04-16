import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import Food from '../types/Food';
import fixtures from '../../fixtures';

const context = describe;

const state: {cart: Food[] } = {
  cart: [],
};

jest.mock('../hooks/useCartStore', () => () => [state]);

describe('Cart', () => {
  it('renders cart', () => {
    render(<Cart />);

    screen.getByText('점심 바구니');
    screen.getByText(/총 주문 수/);
  });

  context('without selected menu', () => {
    beforeEach(() => {
      state.cart = [];
    });

    it('renders zero count', () => {
      render(<Cart />);

      screen.getByText('총 주문 수: 0');
    });
  });

  context('with selected menu', () => {
    beforeEach(() => {
      state.cart = fixtures.foods;
    });

    it('renders selected food list and count', () => {
      render(<Cart />);

      screen.getByText('총 주문 수: 2');
    });
  });
});
