import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { Menu } from '../types/restaurant';

@singleton()
@Store()
export default class CartStore {
  cart: Menu[] = [];

  totalPrice = 0;

  @Action()
  order() {
    this.cart = [];
    this.totalPrice = 0;
  }

  @Action()
  cancel() {
    this.cart = [];
  }

  @Action()
  calculateTotalPrice(cart: Menu[]) {
    this.totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
  }

  @Action()
  addMenu(cart: Menu) {
    this.cart = [...this.cart, cart];
  }

  @Action()
  removeMenu(cartIndex: number) {
    this.cart = this.cart.filter((_, index) => index !== cartIndex);
  }
}
