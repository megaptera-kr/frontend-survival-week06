import { render, screen, fireEvent } from '@testing-library/react';

import Cart from './Cart';

import useCartStore from '../hooks/useCartStore';

const context = describe;

jest.mock('../hooks/useCartStore');

describe('ComponentTest: Cart', () => {
  const regex = /합계:.*원.*주문/;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('선택한 메뉴 아이템이 존재하는 경우, ', () => {
    it('메뉴와 취소 버튼이 보인다.', () => {
      render(<Cart />);

      screen.getByText('점심 바구니');
      screen.getAllByText(/짜장면/);
      screen.getAllByRole('button', { name: '취소' });
      screen.getByRole('button', { name: regex });
    });

    it('선택한 메뉴 가격의 총합이 표시된다.', () => {
      render(<Cart />);

      const button = screen.getByRole('button', { name: /주문/ });
      expect(button.getAttribute('value')).toBe('19500');
    });
  });

  context('선택한 메뉴 중에서 취소 버튼을 클릭했을 때, ', () => {
    it('cartStore 의 removeItem 메서드가 호출된다.', () => {
      render(<Cart />);
      const [, cartStore] = useCartStore();

      const buttons = screen.getAllByRole('button', { name: '취소' });
      fireEvent.click(buttons[0]);
      expect(cartStore.removeItem).toHaveBeenCalled();
    });
  });
});
