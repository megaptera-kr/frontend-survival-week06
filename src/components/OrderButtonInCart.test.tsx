import { render, screen } from '@testing-library/react';

import OrderButtonInCart from './OrderButtonInCart';

import fixtures from '../../fixtures';

const context = describe;

jest.mock('../hooks/useOrder');

describe('OrderButtonInCart', () => {
  const { cartItems } = fixtures;
  const totalPrice = 9999;

  context('cartItems 배열의 길이가 0일 때, ', () => {
    it('rendering correctly', () => {
      render(<OrderButtonInCart cartItems={[]} totalPrice={0} />);
      screen.getByText(/0원/);
      screen.getByRole('button', { name: /합계: 0원 주문/ });
    });
  });

  context('cartItems 배열의 길이가 0이 아닐 때, ', () => {
    it('cartItems의 총 합계 금액이 표시된다.', () => {
      render(
        <OrderButtonInCart cartItems={cartItems} totalPrice={totalPrice} />,
      );
      screen.getByText(/9,999/);
      screen.getByRole('button', { name: /합계: 9,999원 주문/ });
    });
  });
});
