import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import Receipt from '../types/Receipt';
import Food from '../types/Food';

@singleton()
@Store()
export default class OrderStore {
  cart: Food[] = [];

  receipt: Receipt | null = null;

  @Action()
  setReceipt(receipt: Receipt | null) {
    this.receipt = receipt;
  }

  @Action()
  setCart(cart: Food[]) {
    this.cart = cart;
  }
}
