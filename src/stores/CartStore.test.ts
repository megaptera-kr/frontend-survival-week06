import CartStore from './CartStore';

import { foods } from '../../fixtures';

const context = describe;

describe('CartStore', () => {
  let cartStore: CartStore;

  beforeEach(() => {
    cartStore = new CartStore();
  });

  context('with findCartItem', () => {
    it('return cartItem', () => {
      const food = foods[0];

      cartStore.addCartItem(food);
      const item = cartStore.findCartItem(food.id);

      expect(item).not.toBeUndefined();
    });
  });

  context('with addCartItem', () => {
    it('allows to push item', () => {
      const food = foods[0];

      cartStore.addCartItem(food);

      expect(cartStore.size()).toBe(1);
    });

    it('count is increased', () => {
      const food = foods[0];

      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      const target = cartStore.findCartItem(food.id);

      expect(target?.count).toBe(2);
    });
  });

  context('with removeCartItem', () => {
    it('count is decreased', () => {
      const food = foods[0];

      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      cartStore.removeCartItem(food);
      const target = cartStore.findCartItem(food.id);

      expect(target?.count).toBe(1);
    });

    it('when count zero then removed.', () => {
      const food = foods[0];

      cartStore.addCartItem(food);
      cartStore.removeCartItem(food);
      const target = cartStore.findCartItem(food.id);

      expect(target).toBeUndefined();
      expect(cartStore.size()).toBe(0);
    });
  });

  context('with clearCart', () => {
    it('cart is empty', () => {
      const food = foods[0];
      const otherFood = foods[1];

      cartStore.addCartItem(food);
      cartStore.addCartItem(otherFood);
      cartStore.clear();

      expect(cartStore.size()).toBe(0);
    });
  });

  context('with getTotalPrice', () => {
    it('return thue sum of the price of cart items', () => {
      const food = foods[0];

      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      const totalPrice = cartStore.getTotalPrice();

      expect(totalPrice).toBe('24,000');
    });

    it('return "0" when cart is empty', () => {
      const totalPrice = cartStore.getTotalPrice();

      expect(totalPrice).toBe('0');
    });
  });

  context('with getTotalCount', () => {
    it('return thue sum of the count of cart items', () => {
      const food = foods[0];
      const otherFood = foods[1];

      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      cartStore.addCartItem(food);
      cartStore.addCartItem(otherFood);
      cartStore.addCartItem(otherFood);
      const totalPrice = cartStore.getTotalCount();

      expect(totalPrice).toBe(5);
    });

    it('return 0 when cart is empty', () => {
      const totalPrice = cartStore.getTotalCount();

      expect(totalPrice).toBe(0);
    });
  });
});
