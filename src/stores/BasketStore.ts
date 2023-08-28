import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';

import { Menu } from '../types/restaurant';

@singleton()
@Store()
export default class BasketStore {
  basket: Menu[] = [];

  totalPrice = 0;

  @Action()
  addMenu(menu: Menu) {
    this.basket = [
      ...this.basket,
      menu,
    ];

    this.updateTotalPrice();
  }

  @Action()
  removeMenu(menuIndex: number) {
    const newBasket = this.basket.filter((_, index) => index !== menuIndex);
    this.basket = newBasket;

    this.updateTotalPrice();
  }

  @Action()
  clearBasket() {
    this.basket = [];

    this.updateTotalPrice();
  }

  protected updateTotalPrice() {
    this.totalPrice = this.basket.reduce((acc, cur) => acc + cur.price, 0);
  }
}
