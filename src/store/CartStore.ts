import { singleton } from 'tsyringe';

import { Store, Action } from 'usestore-ts';

import Menu from '../types/Menu';

@singleton()
@Store()
export default class CartStore {
  cart : Menu[] = [];

  @Action()
  addCart(menu: Menu) {
    this.cart = [
      ...this.cart,
      menu,
    ];
  }

  @Action()
  removeCart(id: string) {
    this.cart = this.cart.filter((menu) => menu.id !== id);
  }

  @Action()
  clearOrder() {
    this.cart = [];
  }
}
