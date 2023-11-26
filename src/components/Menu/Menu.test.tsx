import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import Menu from './Menu';
import { restaurants } from '../../features/restaurants';
import CartStore from '../../store/cartStore';

const context = describe;
const cartStore = new CartStore();

describe('매장의 상품이 데이터에 있다.', () => {
  context('상품이 Props를 통해 내려온다.', () => {
    it('상품을 확인할 수 있다.', () => {
      render(<Menu menues={restaurants[0].menu} />);
      expect(screen.getAllByText('짜장면')).toBeTruthy();
    });
  });
});

describe('카트 전역 저장소를 준비한다.', () => {
  context('상품을 담는다.', () => {
    it('상품이 담긴다.', () => {
      render(<Menu menues={restaurants[0].menu} />);
      const testBtn = screen.getByTestId('짜장면');
      fireEvent.click(testBtn);
      waitFor(() => {
        expect(cartStore.cart.find((item) => item.name === '짜장면')).toBeTruthy();
      });
    });
  });
});
