import fixtures from '../../fixtures';
import cartStore from './cartStore';

describe('CartStore', () => {
  beforeEach(() => {
    cartStore.cleanup();
  });
  test('addCartItem 액션은 카트에 아이템을 추가할 수 있다.', () => {
    const [menu] = fixtures.foods;
    cartStore.addCartItem(menu);

    expect(cartStore.carList.length).toBe(1);
  });

  test('removeCartItem 액션은 카트에 아이템을 제거할 수 있다.', () => {
    cartStore.removeCartItem(0);

    expect(cartStore.carList.length).toBe(0);
  });

  test('clearCart 액션은 카트를 비운다.', () => {
    fixtures.foods.forEach((menu) => cartStore.addCartItem(menu));

    expect(cartStore.carList.length).toBe(fixtures.foods.length);

    cartStore.clearCart();

    expect(cartStore.carList.length).toBe(0);
  });
});
