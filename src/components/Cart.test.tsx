import { render, screen } from '@testing-library/react';

import Cart from './Cart';

describe('Cart', () => {
  it('Cart is empty', () => {
    render(<Cart />);
    screen.getByText('장바구니가 비어있습니다.');
  });

  // it('add to cart', () => {
  //   render(<Cart />);
  //   screen.getByText('짜장면(8,000원)');
  // });
});
