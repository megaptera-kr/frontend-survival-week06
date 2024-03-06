import { render, screen } from '@testing-library/react';

import Cart from './Cart';

test('Cart', () => {
  const title = '주문 바구니';
  const regex = /합계:.*원.*주문/;

  render(<Cart />);

  screen.getByText(title);
  screen.getByText(regex);

  const orderButton = screen.getByRole('button', { name: regex });
  expect(orderButton).toBeInTheDocument();
});
