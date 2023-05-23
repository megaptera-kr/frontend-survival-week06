import { singleton } from 'tsyringe';

import ObjectStore from './ObjectStore';
import type { FoodWithCount } from '../types/cart';
import type { Food } from '../types/food';

@singleton()
export default class CartStore extends ObjectStore {
  cart: FoodWithCount[] = [];

  // eslint-disable-next-line class-methods-use-this
  private parseCartItem(food: Food): FoodWithCount {
    return { ...food, count: 1 };
  }

  size() {
    return this.cart.length;
  }

  findCartItem(id: string) {
    return this.cart.find((item) => item.id === id);
  }

  getTotalPrice() {
    return [...this.cart].reduce((acc, item) => acc + item.price * item.count, 0).toLocaleString();
  }

  getTotalCount() {
    return [...this.cart].reduce((acc, item) => acc + item.count, 0);
  }

  private updateItemCount<T extends FoodWithCount>(food: T, update: (arg: T) => T) {
    const idx = this.cart.findIndex((item) => item.id === food.id);
    this.cart = [
      ...this.cart.slice(0, idx),
      update(food),
      ...this.cart.slice(idx + 1),
    ];
  }

  addCartItem = (food: Food) => {
    const cartItem = this.findCartItem(food.id);
    if (cartItem) {
      this.updateItemCount(cartItem, (item) => ({ ...item, count: item.count + 1 }));
    } else {
      this.cart = [...this.cart, this.parseCartItem(food)];
    }
    this.publish();
  };

  removeCartItem = (food: Food) => {
    const cartItem = this.findCartItem(food.id);
    if (!cartItem) return;

    if (cartItem.count > 1) {
      this.updateItemCount(cartItem, (item) => ({ ...item, count: item.count - 1 }));
    } else {
      this.cart = this.cart.filter((item) => item.id !== food.id);
    }
    this.publish();
  };

  clear() {
    this.cart = [];
    this.publish();
  }
}
