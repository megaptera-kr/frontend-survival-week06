import { render, screen } from '@testing-library/react';

import Cart from './Cart';

describe('ComponentTest: Cart', () => {
  const regex = /합계:.*원.*주문/;

  it('rendering correctly', () => {
    render(<Cart />);

    screen.getByText('주문 바구니');
    screen.getByText(regex);

    screen.getAllByRole('button', { name: '취소' });
    screen.getByRole('button', { name: regex });
  });
});
