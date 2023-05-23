import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import { Menu, Receipt } from '../types/restaurant';

@singleton()
@Store()
export default class OrderStore {
  cart: Menu[] = [];

  receipt: Receipt | null = null;

  @Action()
  setReceipt(receipt: Receipt | null) {
    this.receipt = receipt;
  }

  @Action()
  setCart(cart: Menu[]) {
    this.cart = cart;
  }
}
