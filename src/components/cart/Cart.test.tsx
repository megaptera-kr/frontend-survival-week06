import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { container } from 'tsyringe';

import Cart from './Cart';

const context = describe;

describe('Cart', () => {
  function renderCart() {
    return render(<Cart />);
  }

  beforeEach(() => {
    container.clearInstances();
    global.alert = jest.fn();
  });

  it('render correctly', () => {
    renderCart();

    expect(screen.getByRole('heading', { level: 2, name: '장바구니' }));
    expect(screen.getByRole('button', { name: '비우기' }));
    expect(screen.getByRole('button', { name: '주문하기' }));
  });

  context('when order button is clicked', () => {
    it('cart will be empty', async () => {
      renderCart();
      const orderButton = screen.getByRole('button', { name: '주문하기' });

      await userEvent.click(orderButton);

      expect(screen.getByText(/총 주문 개수: 0개/));
      expect(screen.getByText(/총 주문 금액: 0원/));
    });

    it('calls alert', async () => {
      renderCart();
      const orderButton = screen.getByRole('button', { name: '주문하기' });

      await userEvent.click(orderButton);

      expect(global.alert).toHaveBeenCalledTimes(1);
      expect(global.alert).toHaveBeenCalledWith('order success');
    });
  });

  context('when clear button is clicked', () => {
    it('cart will be empty', async () => {
      renderCart();
      const clearButton = screen.getByRole('button', { name: '비우기' });

      await userEvent.click(clearButton);

      expect(screen.getByText(/총 주문 개수: 0개/));
      expect(screen.getByText(/총 주문 금액: 0원/));
    });
  });
});
