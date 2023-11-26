import { restaurants } from '../../features/restaurants';
import CartStore from '../../store/cartStore';

const context = describe;
const dummyMenu = restaurants[0].menu[0];

describe('상품이 장바구니에 담긴다.', () => {
  context('상품이 담겼을 때, 메뉴가 추가된다.', () => {
    it('장바구니에 상품이 추가되는 것을 확인할 수 있다.', () => {
      const cartStore = new CartStore();
      cartStore.addCart(dummyMenu);
      expect(cartStore.cart.length === 1).toBeTruthy();
    });
  });
});

describe('상품이 장바구니에 담긴다.', () => {
  context('상품이 담겼을 때, 메뉴가 추가된다.', () => {
    it('장바구니에 상품이 제거되는 것을 확인할 수 있다.', () => {
      const cartStore = new CartStore();
      cartStore.deleteCartMenu(0);
      expect(cartStore.cart.length === 0).toBeTruthy();
    });
  });
});

describe('상품이 장바구니에 담긴다.', () => {
  context('상품을 취소하거나 주문을 한다.', () => {
    it('장바구니에 상품이 초기화 되는 것을 확인할 수 있다.', () => {
      const cartStore = new CartStore();
      cartStore.clearCart();
      expect(cartStore.cart.length === 0).toBeTruthy();
    });
  });
});
