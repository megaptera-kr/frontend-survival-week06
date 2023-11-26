import {
  act,
  render, renderHook, screen, waitFor,
} from '@testing-library/react';
import { useStore } from 'usestore-ts';
import fixtures from '../../fixtures';
import Cart from './Cart';
import cartStore from '../stores/cartStore';

describe('Cart', () => {
  test('로컬 스토리지의 장바구니에 담겨져있는 물품들의 가격에 합산이 그려진다.', () => {
    render(<Cart />);
    const { result: { current } } = renderHook(() => useStore(cartStore));
    const [, store] = current;

    act(() => {
      fixtures.foods.map((row) => store.addCartItem(row));
    });

    waitFor(() => {
      const totalPrice = fixtures.foods.reduce((prev, curr) => prev + curr.price, 0).toLocaleString();

      const element = screen.getByTestId('Payment');

      expect(element).toHaveTextContent(`${totalPrice}`);
    });
  });
});
