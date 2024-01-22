import { fireEvent, render, screen } from '@testing-library/react';
import OrderBtn from './OrderBtn';

describe('OrderBtn', () => {
  const clearMenu = jest.fn();
  it('rendre OrderBtn', () => {
    render(<OrderBtn clearMenu={clearMenu} />);
    fireEvent.click(screen.getByText('취소'));
    expect(clearMenu).toBeCalled();
  });
});
