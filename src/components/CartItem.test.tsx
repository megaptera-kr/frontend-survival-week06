import { render, screen, fireEvent } from '@testing-library/react';

import CartItem from './CartItem';

describe('CartItem ', () => {
  const menu = {
    id: '1',
    name: '짜장면',
    price: 8000,
  };
  const index = 1;

  const handleClickCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCartItem() {
    render(<CartItem
      item={menu}
      key="food-01"
      index={index}
      onClickCancel={handleClickCancel}
    />);
  }

  it('renders item information', () => {
    renderCartItem();

    screen.getByText('짜장면(8,000원)');
  });

  it('listens for cancel button click event', () => {
    renderCartItem();

    fireEvent.click(screen.getByText('취소'));

    expect(handleClickCancel).toBeCalledWith(index);
  });
});
