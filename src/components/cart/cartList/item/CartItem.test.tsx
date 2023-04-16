import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartItem from './CartItem';
import cartItems from '../../../../../fixtures/cartItems';

const context = describe;

describe('CartItem', () => {
  const onDecrease = jest.fn();
  const onIncrease = jest.fn();

  function renderCartItem() {
    return render(<CartItem
      cartItem={cartItems[0]}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
    />);
  }

  it('render correctly', () => {
    renderCartItem();

    expect(screen.getByText('짜장면')).toBeInTheDocument();
    expect(screen.getByText('개수: 3개')).toBeInTheDocument();
    expect(screen.getByText('가격: 24,000원')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '짜장면 개수 증가' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '짜장면 개수 감소' })).toBeInTheDocument();
  });

  context('when decrease button clicked', () => {
    it('calls onIncrease', async () => {
      renderCartItem();
      const decreaseButton = screen.getByRole('button', { name: '짜장면 개수 감소' });

      await userEvent.click(decreaseButton);

      expect(onDecrease).toHaveBeenCalled();
    });
  });

  context('when increase button clicked', () => {
    it('calls onIncrease', async () => {
      renderCartItem();
      const increaseBtn = screen.getByRole('button', { name: '짜장면 개수 증가' });

      await userEvent.click(increaseBtn);

      expect(onIncrease).toHaveBeenCalled();
    });
  });
});
