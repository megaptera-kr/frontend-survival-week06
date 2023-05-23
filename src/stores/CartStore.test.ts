import Food from '../types/food';
import CartStore from './CartStore';

const context = describe;

describe('CartStore', () => {
  const cartStore = new CartStore();
  context('when add menu', () => {
    beforeEach(() => {
      cartStore.items = [];
    });
    it('add no data', () => {
      cartStore.addItem({} as Food);
      expect(cartStore.items).toHaveLength(0);
    });
    it('add one menu data', () => {
      cartStore.addItem({ id: '1', name: '짜장면', price: 1000 });
      expect(cartStore.items).toHaveLength(1);
    });

    it('add three menu data', () => {
      cartStore.addItem({ id: '1', name: '짜장면', price: 1000 });
      cartStore.addItem({ id: '2', name: '짬뽕', price: 1000 });
      cartStore.addItem({ id: '3', name: '탕수육', price: 1000 });

      expect(cartStore.items).toHaveLength(3);
    });
  });

  context('when remove menu', () => {
    beforeEach(() => {
      cartStore.items = [{ id: '1', name: '짜장면', price: 1000 }];
    });
    it('remove one data', () => {
      cartStore.removeItem(0);
      expect(cartStore.items).toHaveLength(0);
    });
    it('remove two data', () => {
      cartStore.addItem({ id: '2', name: '짬뽕', price: 1000 });
      cartStore.removeItem(0);
      expect(cartStore.items).toHaveLength(1);
      cartStore.removeItem(0);
      expect(cartStore.items).toHaveLength(0);
    });
    it('remove all data', () => {
      cartStore.clearAllItems();
      expect(cartStore.items).toHaveLength(0);
    });
  });
});
