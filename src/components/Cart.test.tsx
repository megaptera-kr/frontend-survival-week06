import { render, screen } from '@testing-library/react';

import Cart from './Cart';

test('ComponentTest: Cart', () => {
  const regex = /합계:.*원.*주문/;

  render(<Cart />);

  screen.getByText('주문 바구니');
  screen.getByText(regex);

  const orderButton = screen.getByRole('button', { name: regex });
  expect(orderButton).toBeInTheDocument();
});
