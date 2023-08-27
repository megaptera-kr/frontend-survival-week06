import { fireEvent, render, screen } from '@testing-library/react';

import BasketList from './BasketList';
import fixtures from '../../fixtures';

const removeMenu = jest.fn();

jest.mock('../hooks/useBasketStorage', () => () => ({
  bucket: fixtures.foods,
  removeMenu,
}));

describe('BasketList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCartItem() {
    render((
      <BasketList
        basketList={fixtures.foods}
        handleClickRemove={removeMenu}
      />
    ));
  }

  it('BasketList를 렌더링 한다.', () => {
    renderCartItem();

    screen.getByText('짜장면(8,000원)');
  });

  it('X 버튼을 클릭하면 cancelButton을 호출 한다.', () => {
    renderCartItem();

    const cancelButton = screen.getAllByText('X')[0];

    fireEvent.click(cancelButton);

    expect(removeMenu).toBeCalled();
  });
});
