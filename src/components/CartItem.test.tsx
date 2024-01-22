import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from './CartItem';

describe('CartIem', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  };
  const handleRemoveMenu = jest.fn();
  const index = 1;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCartItem = () => {
    render(<CartItem food={food} handleRemoveMenu={handleRemoveMenu} index={index} />);
  };

  it('render CartItem', () => {
    renderCartItem();
    screen.getByText(/짜장면/);
    screen.getByText(/8,000/);
  });

  it('cancel button click event', () => {
    renderCartItem();
    fireEvent.click(screen.getByText('X'));
    expect(handleRemoveMenu).toBeCalledWith(index);
  });
});
