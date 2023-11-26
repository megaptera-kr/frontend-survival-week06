import CartStore from './cartStore';

const cartStore = new CartStore();

const context = describe;
describe('전역상태를 확인한다.', () => {
  context('cartStore를 생성한다.', () => {
    it('cart에 접근된다.', () => {
      expect(cartStore.cart).toBeTruthy();
    });
  });
});
