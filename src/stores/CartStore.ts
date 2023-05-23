import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { Food } from '../types/Restaurant';

@singleton()
@Store()
export default class CartStore {
  menus: Food[] = [];

  @Action()
  add(food: Food) {
    this.menus = [...this.menus, food];
  }

  @Action()
  subtract(index: number) {
    this.menus = this.menus.filter((_, idx) => idx !== index);
  }

  @Action()
  reset() {
    this.menus = [];
  }
}
