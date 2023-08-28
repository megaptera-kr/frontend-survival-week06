import fixtures from '../../fixtures';
import CartStore from './CartStore';

describe('Cart Store', () => {
  let store: CartStore;

  beforeEach(() => {
    store = new CartStore();
  });

  describe('addCartItem', () => {
    it('Add menu to the cart', () => {
      const food = fixtures.foods[0];

      store.resetCart();

      expect(store.cart).toHaveLength(0);

      store.addCartItem(food);

      expect(store.cart).toHaveLength(1);

      store.addCartItem(food);

      expect(store.cart).toHaveLength(2);
    });
  });

  describe('removeCartItem', () => {
    it('remove menu from the cart', () => {
      store.cart = [...fixtures.foods];

      expect(store.cart).toHaveLength(2);

      const index = 0;

      store.removeCartItem(index);

      expect(store.cart).toHaveLength(1);
    });
  });

  describe('calcTotalPrice', () => {
    it('calc total price', () => {
      store.cart = [...fixtures.foods];

      store.calcTotalPrice();

      expect(store.totalPrice).toBe(18000);
    });
  });
});
