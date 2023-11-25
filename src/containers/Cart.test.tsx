import {
  render, screen, renderHook, act,
} from '@testing-library/react';
import { useCartStorage } from '../hooks/useStorage';
import fixtures from '../../fixtures';
import Cart from './Cart';

describe('Cart', () => {
  test('로컬 스토리지의 장바구니에 데이터가 담겨 있다면 해당 데이터를 그린다', () => {
    render(<Cart />);
    const { result: { current } } = renderHook(() => useCartStorage());

    act(() => current.setCart(fixtures.foods));

    const [item] = screen.getAllByTestId('CartItem');

    expect(item).toBeInTheDocument();
  });

  test('로컬 스토리지의 장바구니에 담겨져있는 물품들의 가격에 합산이 버튼에 그려진다.', () => {
    render(<Cart />);
    const totalPrice = fixtures.foods.reduce((prev, curr) => prev + curr.price, 0).toLocaleString();

    const element = screen.getByTestId('Payment');

    expect(element).toHaveTextContent(`${totalPrice}`);
  });
});
