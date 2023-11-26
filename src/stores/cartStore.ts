import { Action, Store } from 'usestore-ts';
import { Menu } from '../../types';

@Store()
class CartStore {
  carList: Menu[] = [];

  @Action()
  cleanup() {
    this.carList = [];
  }

  @Action()
  getCartList() {
    return [...this.carList];
  }

  @Action()
  addCartItem(item: Menu) {
    this.carList = [...this.carList, item];
  }

  @Action()
  removeCartItem(itemIndex: number) {
    this.carList = this.carList.filter((row, index) => index !== itemIndex);
  }

  @Action()
  clearCart() {
    this.carList = [];
  }

  get cartArray() {
    return [...this.carList];
  }
}

const cartStore = new CartStore();

export default cartStore;
