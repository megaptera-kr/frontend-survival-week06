import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import Food from '../types/Food';

@singleton()
@Store()
export default class CartStore {
  selectedFoods: Food[] = [];
  // totalPrice = 0;

    @Action()
  addFood(food: Food) {
    this.selectedFoods = [...this.selectedFoods, food];
    // this.totalPrice += food.price;
  }

    @Action()
    deleteFood(index: number) {
      this.selectedFoods = this.selectedFoods.filter((_, i) => i !== index);
      // this.totalPrice -= this.selectedFoods[index].price;
    }

    @Action()
    clear() {
      this.selectedFoods = [];
    }
}
