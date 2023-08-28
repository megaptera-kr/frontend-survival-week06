import { fireEvent, render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import CartItem from './CartItem';

const removeCartItem = jest.fn();

const context = describe;

describe('<CartItem />', () => {
  const { foods } = fixtures;
  const index = 0;
  const food = foods[index];

  it('render cart item', () => {
    render(<CartItem
      food={food}
      index={index}
      removeCartItem={removeCartItem}
    />);

    screen.getByText(/Menu-01/);
    screen.getByText(/8,000원/);
  });

  context('click "X" button', () => {
    it('execute removeCartItem', () => {
      render(<CartItem
        food={food}
        index={index}
        removeCartItem={removeCartItem}
      />);

      const button = screen.getByRole('button', { name: 'X' });

      fireEvent.click(button);

      expect(removeCartItem).toBeCalledWith(index);
    });
  });
});
