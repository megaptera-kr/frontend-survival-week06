import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import Food from '../types/Food';

@singleton()
@Store()
export default class CartStore {
  cart: Food[] = [];

  @Action()
  addCartItem(item: Food) {
    this.cart = [...this.cart, item];
  }

  @Action()
  removeCartItem(deleteIdx: number) {
    this.cart = this.cart.filter((item, index) => index !== deleteIdx);
  }

  @Action()
  removeAllCartItems() {
    this.cart = [];
  }
}
