import { fireEvent, render, screen } from '@testing-library/react';

import BasketButton from './BasketButton';

describe('BasketButton', () => {
  const handleClickBasket = jest.fn();

  function renderBasketButton() {
    return render((
      <BasketButton
        name="선택"
        text="선택"
        onClick={handleClickBasket}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('BasketButton 렌더링 한다.', () => {
    renderBasketButton();

    expect(screen.getByText('선택')).toBeInTheDocument();
  });

  it('BasketButton 클릭하면 handleClickBasket을 호출한다.', () => {
    renderBasketButton();

    fireEvent.click(screen.getByText('선택'));

    expect(handleClickBasket).toBeCalled();
  });
});
