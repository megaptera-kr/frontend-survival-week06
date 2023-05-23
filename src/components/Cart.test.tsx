import {
  fireEvent, render, renderHook, screen,
} from '@testing-library/react';

import Cart from './Cart';
import useCartStore from '../hooks/useCartStore';

const context = describe;

describe('Cart ', () => {
  const { result } = renderHook(() => useCartStore());
  function renderCart() {
    render(<Cart />);
  }

  beforeEach(() => {
    result.current[1].items = [];
  });

  context('when render cart', () => {
    it('show cart title', () => {
      renderCart();
      expect(screen.getByText(/메가 장바구니/)).toBeInTheDocument();
    });

    it('show cart list', () => {
      result.current[1].addItem({ id: '1', name: '짜장면', price: 10_000 });
      result.current[1].addItem({ id: '2', name: '짬뽕', price: 10_000 });
      renderCart();

      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
      expect(screen.getByText(/짬뽕/)).toBeInTheDocument();

      expect(screen.getByText(/주문내역2개/)).toBeInTheDocument();
    });

    it('show cart count', () => {
      result.current[1].addItem({ id: '1', name: '짜장면', price: 10_000 });
      result.current[1].addItem({ id: '2', name: '짬뽕', price: 10_000 });
      renderCart();

      expect(screen.getByText(/주문내역2개/)).toBeInTheDocument();
    });
  });
  context('when remove cart', () => {
    it('cart remove 짜장면 item', () => {
      result.current[1].addItem({ id: '1', name: '짜장면', price: 10_000 });
      result.current[1].addItem({ id: '2', name: '짬뽕', price: 10_000 });
      renderCart();

      const button = screen.getAllByRole('button', { name: 'X' })[0];

      fireEvent.click(button);

      expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
    });
    it('cart all items', () => {
      result.current[1].addItem({ id: '1', name: '짜장면', price: 10_000 });
      result.current[1].addItem({ id: '2', name: '짬뽕', price: 10_000 });
      renderCart();

      const textItemJajangmyeon = screen.getByText(/짜장면/);
      const textItemChampon = screen.getByText(/짬뽕/);

      expect(textItemJajangmyeon).toBeInTheDocument();
      expect(textItemChampon).toBeInTheDocument();

      const button = screen.getByRole('button', { name: '취소' });

      fireEvent.click(button);

      expect(textItemJajangmyeon).not.toBeInTheDocument();
      expect(textItemChampon).not.toBeInTheDocument();
    });
  });
});
