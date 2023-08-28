import { fireEvent, render, screen } from '@testing-library/react';

import CartButtons from './CartButtons';

const resetCart = jest.fn();

const context = describe;

describe('<CartButtons />', () => {
  it('render cart buttons', () => {
    render(<CartButtons
      resetCart={resetCart}
    />);

    screen.getByRole('button', { name: '주문하기' });
    screen.getByRole('button', { name: '취소' });
  });

  context('click "주문하기"', () => {
    it('execute cart initialization handler', () => {
      render(<CartButtons
        resetCart={resetCart}
      />);

      const button = screen.getByRole('button', { name: '주문하기' });

      fireEvent.click(button);

      expect(resetCart).toHaveBeenCalled();
    });
  });

  context('click "취소"', () => {
    it('execute cart initialization handler', () => {
      render(<CartButtons
        resetCart={resetCart}
      />);

      const button = screen.getByRole('button', { name: '취소' });

      fireEvent.click(button);

      expect(resetCart).toHaveBeenCalled();
    });
  });
});
