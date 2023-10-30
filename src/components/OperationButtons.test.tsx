import { fireEvent, render, screen } from '@testing-library/react';
import OperationButtons from './OperationButtons';

describe('OperationButtons', () => {
  const onClickCancel = jest.fn();
  const onClickOrder = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderOperationButtons() {
    render((
      <OperationButtons
        onClickCancel={onClickCancel}
        onClickOrder={onClickOrder}
      />
    ));
  }

  it('renders OperationButtons', () => {
    renderOperationButtons();

    screen.getByText('주문하기');
    screen.getByText('취소');
  });

  it('listens for cancel button click event', () => {
    renderOperationButtons();

    fireEvent.click(screen.getByText(/취소/));

    expect(onClickCancel).toBeCalled();
  });

  it('listens for order button click event', () => {
    renderOperationButtons();

    fireEvent.click(screen.getByText(/주문하기/));

    expect(onClickOrder).toBeCalled();
  });
});
