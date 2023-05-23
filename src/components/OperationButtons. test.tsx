// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, render, screen } from '@testing-library/react';
import OperationButtons from './OperationButtons';

describe('OperationButtons', () => {
  const handleClickCancle = jest.fn();
  const handleClickOrder = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('listens for click events', () => {
    render((
      <OperationButtons
        handleClickCancle={handleClickCancle}
        handleClickOrder={handleClickOrder}
      />
    ));

    fireEvent.click(screen.getByText(/취소/));

    expect(handleClickCancle).toBeCalled();

    fireEvent.click(screen.getByText(/주문하기/));

    expect(handleClickOrder).toBeCalled();
  });
});
