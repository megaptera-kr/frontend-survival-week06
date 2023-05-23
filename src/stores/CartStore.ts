import { singleton } from 'tsyringe';
import ObjectStore from './ObjectStore';
import Food from '../types/food';

function isEmpty(food: Food) {
  return Object.keys(food).length === 0;
}

export type CartStoreSnapshot = {
  items: Food[];
  totalPrice: number
}

function totalPrice(menu: Food[]) {
  return menu.reduce((curr, food) => curr + food.price, 0);
}

@singleton()
export default class CartStore extends ObjectStore<CartStoreSnapshot> {
  items: Food[] = [];

  totalPrice = 0;

  constructor() {
    super();
    this.takeSnapshot();
  }

  addItem(food: Food) {
    if (isEmpty(food)) {
      return;
    }
    this.items = [
      ...this.items,
      food,
    ];

    this.update();
  }

  removeItem(index: number) {
    this.items = this.items.filter((item, itemIndex) => index !== itemIndex);

    this.update();
  }

  clearAllItems() {
    this.items = [];

    this.update();
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  private takeSnapshot() {
    this.snapshot = {
      items: this.items,
      totalPrice: totalPrice(this.items),
    };
  }
}
