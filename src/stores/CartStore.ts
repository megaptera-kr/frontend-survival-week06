import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import Food from '../types/Food';

@singleton()
@Store()
export default class CartStore {
  cart: Food[] = [];

  /**
   * 주문카트에 메뉴를 담는다.
   */
  @Action()
  addMenu(menu:Food) {
    this.cart = [...this.cart, menu];
  }

  /**
   * 주문카트에서 메뉴를 뺀다.
   */
  @Action()
  delMenu(index:number) {
    this.cart = this.cart.filter((_, i) => i !== index);
  }

  /**
   * 주문카트 비우기
   */
  @Action()
  clear() {
    this.cart = [];
  }
}
