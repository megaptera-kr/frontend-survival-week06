import { fireEvent, render, screen } from '@testing-library/react';
import OrderBtn from './OrderBtn';

describe('OrderBtn', () => {
  const clearMenu = jest.fn();
  const orderMenu = jest.fn();
  it('rendre OrderBtn', () => {
    render(<OrderBtn clearMenu={clearMenu} orderMenu={orderMenu} />);
    fireEvent.click(screen.getByText('취소'));
    expect(clearMenu).toBeCalled();
    fireEvent.click(screen.getByText('주문하기'));
    expect(orderMenu).toBeCalled();
  });
});
