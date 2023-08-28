import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { Food } from '../types';

@singleton()
@Store()
export default class CartStore {
  cart : Food[] = [];

  foodCount = 0;

  totalPrice = 0;

  @Action()
  addCartItem(food: Food) {
    this.cart = [...this.cart, food];
    this.calcTotalPrice();
    this.foodCount += 1;
  }

  @Action()
  removeCartItem(index: number) {
    this.cart = this.cart.filter((_, i) => i !== index);
    this.calcTotalPrice();
    this.foodCount -= 1;
  }

  @Action()
  calcTotalPrice() {
    this.totalPrice = this.cart.reduce((a, c) => a + c.price, 0);
  }

  @Action()
  resetCart() {
    this.cart = [];
    this.foodCount = 0;
    this.totalPrice = 0;
  }
}
