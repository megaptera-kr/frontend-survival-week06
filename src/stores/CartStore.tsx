import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import Menu from '../types/Menu';

@singleton()
@Store()
export default class CartStore {
  cart: Menu[] = [];

  @Action()
  addCart(menu: Menu) {
    this.cart = [
      ...this.cart,
      menu,
    ];
  }

  @Action()
  cancelCart(index: number) {
    this.cart = this.cart.filter((_, i) => i !== index);
  }

  @Action()
  clear() {
    this.cart = [];
  }
}
