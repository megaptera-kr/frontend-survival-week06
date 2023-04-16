import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { container } from 'tsyringe';

import cartItems from '../../../../fixtures/cartItems';
import CartList from './CartList';
import useCartStore from '../../../hooks/useCartStore';
import CartStore from '../../../stores/CartStore';

const context = describe;

jest.mock('../../../hooks/useCartStore');

describe('CartList', () => {
  const MockClass = CartStore as jest.MockedClass<typeof CartStore>;
  const instance = new MockClass();
  const removeCartItem = jest.fn();

  function renderCartList() {
    return render(<CartList />);
  }

  beforeEach(() => {
    container.clearInstances();
    instance.cart = cartItems;
    instance.removeCartItem = removeCartItem;
    instance.addCartItem = jest.fn();
    jest.mocked(useCartStore).mockImplementation(() => instance);
  });

  it('render correctly', () => {
    renderCartList();

    expect(screen.getByText('짜장면')).toBeInTheDocument();
    expect(screen.getByText('개수: 3개')).toBeInTheDocument();
    expect(screen.getByText('가격: 24,000원')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '짜장면 개수 증가' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '짜장면 개수 감소' })).toBeInTheDocument();
  });

  // TODO: useCartStore 목킹문제로 해결 못함..
  // context('when decrease button clicked', () => {
  //   it('count and price will be reflected.', async () => {
  //     renderCartList();
  //     const decreaseButton = screen.getByRole('button', { name: '짜장면 개수 감소' });

  //     await userEvent.click(decreaseButton);
  //     expect(removeCartItem).toHaveBeenCalledWith(cartItems[0]);
  //     expect(screen.getByText('개수: 2개')).toBeInTheDocument();
  //     expect(screen.getByText('가격: 16,000원')).toBeInTheDocument();
  //   });
  // });

  // context('when increase button clicked', () => {
  //   it('count and price will be reflected.', async () => {
  //     renderCartList();
  //     const increaseBtn = screen.getByRole('button', { name: '짜장면 개수 증가' });

  //     await userEvent.click(increaseBtn);

  //     expect(screen.getByText('개수: 4개')).toBeInTheDocument();
  //     expect(screen.getByText('가격: 32,000원')).toBeInTheDocument();
  //   });
  // });
});
