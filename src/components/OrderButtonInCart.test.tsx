import { render, screen, fireEvent } from '@testing-library/react';

import OrderButtonInCart from './OrderButtonInCart';
import fixtures from '../../fixtures';

jest.mock('../apis/order.api');

describe('OrderButtonInCart', () => {
  const { cartItems } = fixtures;
  const totalPrice = 9999;

  it('rendering correctly', () => {
    render(<OrderButtonInCart cartItems={cartItems} totalPrice={totalPrice} />);
    screen.getByText(/9,999/);
    screen.getByRole('button', { name: /주문/ });
  });

  it('rendering correctly', async () => {
    render(<OrderButtonInCart cartItems={cartItems} totalPrice={totalPrice} />);
    // const button = screen.getByRole('button', { name: /주문/ });
    // await waitFor(() => expect(OrderAPI.prototype.create).toHaveBeenCalled());
  });
});
