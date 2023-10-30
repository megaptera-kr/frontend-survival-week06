import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from './CartItem';

describe('CartItem', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  };

  const index = 1;

  const onClickCancel = jest.fn();

  function renderCartItem() {
    render((
      <CartItem
        food={food}
        index={index}
        onClickCancel={onClickCancel}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders CartItem', () => {
    renderCartItem();

    screen.getByText('짜장면');
    screen.getByText('8,000원');
    screen.getByText('X');
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    fireEvent.click(screen.getByText('X'));

    expect(onClickCancel).toBeCalledWith(index);
  });
});
