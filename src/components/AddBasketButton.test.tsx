import { fireEvent, render, screen } from '@testing-library/react';

import AddBasketButton from './AddBasketButton';

describe('AddBasketButton', () => {
  const addBucket = jest.fn();

  function renderAddBasketButton() {
    return render((
      <AddBasketButton
        name="선택"
        title="선택"
        onClick={addBucket}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('AddBasketButton 렌더링 한다.', () => {
    renderAddBasketButton();

    expect(screen.getByText('선택')).toBeInTheDocument();
  });

  it('AddBasketButton 클릭하면 addBucket을 호출한다.', () => {
    renderAddBasketButton();

    fireEvent.click(screen.getByText('선택'));

    expect(addBucket).toBeCalled();
  });
});
