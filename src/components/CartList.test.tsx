import {
  act,
  fireEvent, render, renderHook, screen, waitFor,
} from '@testing-library/react';

import CartList from './CartList';

import useCartStore from '../hooks/useCartStore';

const context = describe;

describe('renderCart ', () => {
  const { result } = renderHook(() => useCartStore());
  function renderCart() {
    render(<CartList />);
  }

  context('when render cart', () => {
    beforeEach(() => {
      result.current[1].items = [];
    });
    it('show cart list', async () => {
      await waitFor(() => {
        result.current[1].addItem({ id: '1', name: '짜장면', price: 10_000 });
        result.current[1].addItem({ id: '2', name: '짬뽕', price: 10_000 });
      });
      renderCart();

      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
      expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
    });
  });

  context('when remove cart', () => {
    beforeEach(() => {
      result.current[1].items = [];
    });
    it('cart remove 짜장면 item', () => {
      result.current[1].addItem({ id: '1', name: '짜장면', price: 10_000 });
      result.current[1].addItem({ id: '2', name: '짬뽕', price: 10_000 });
      renderCart();

      const button = screen.getAllByRole('button', { name: 'X' })[0];

      fireEvent.click(button);

      expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
    });

    it('cart remove all items', async () => {
      result.current[1].addItem({ id: '1', name: '짜장면', price: 10_000 });
      result.current[1].addItem({ id: '2', name: '짬뽕', price: 10_000 });
      renderCart();

      const textItemJajangmyeon = screen.getByText(/짜장면/);
      const textItemChampon = screen.getByText(/짬뽕/);

      const button = screen.getAllByRole('button', { name: 'X' });

      button.forEach((buttonElement) => fireEvent.click(buttonElement));

      await waitFor(() => {
        expect(textItemJajangmyeon).not.toBeInTheDocument();
        expect(textItemChampon).not.toBeInTheDocument();
      });
    });
  });
});
