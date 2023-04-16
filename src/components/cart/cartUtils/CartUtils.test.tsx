import { render, screen } from '@testing-library/react';

import CartUtils from './CartUtils';

describe('CartUtils', () => {
  function renderCartUtils() {
    return render(<CartUtils />);
  }

  it('render correctly', () => {
    renderCartUtils();

    expect(screen.getByText(/총 주문 개수: 0개/));
    expect(screen.getByText(/총 주문 금액: 0원/));
  });
});
