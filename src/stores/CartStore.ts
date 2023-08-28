import { singleton } from 'tsyringe';

import Food from '../types/Food';

type Listener = () => void;

@singleton()
export default class CartStore {
  cart:Food[] = [];

  listeners = new Set<Listener>();

  selectCart(food: Food) {
    this.cart.push(food);
  }

  deleteCart(idx: number) {
    this.cart = this.cart.filter((_, i) => i !== idx);
  }

  update() {
    this.listeners.forEach((listener) => {
      listener();
    });
  }

  addListener(listener:Listener) {
    this.listeners.add(listener);
  }

  removeListener(listener:Listener) {
    this.listeners.delete(listener);
  }
}
