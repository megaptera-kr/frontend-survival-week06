import CartItemModel from './CartItemModel';

import Food from '../types/FoodType';

export function getMaxId(items: CartItemModel[]) {
  return Math.max(0, ...items.map((item: CartItemModel) => item.id));
}

class CartModel {
  readonly items: CartItemModel[] = [];

  readonly totalPrice: number;

  constructor(items: CartItemModel[] = [], totalPrice = 0) {
    this.items = items;
    this.totalPrice = !items.length
      ? totalPrice
      : this.calculateTotalPrice(items);
  }

  private getNewId(): number {
    return getMaxId(this.items) + 1;
  }

  addItem({ id, name, price }: Food) {
    const newId: number = this.getNewId();
    const item: CartItemModel = new CartItemModel({
      id: newId,
      food: { id, name, price },
    });

    const newItems: CartItemModel[] = [...this.items, item];

    return new CartModel(newItems, this.calculateTotalPrice(newItems));
  }

  removeItem(cartId: number) {
    const newItems: CartItemModel[] = this.items.filter(
      (item: CartItemModel) => item.id !== cartId,
    );

    return new CartModel(newItems, this.calculateTotalPrice(newItems));
  }

  // eslint-disable-next-line class-methods-use-this
  removeAllItems() {
    return new CartModel([]);
  }

  // eslint-disable-next-line class-methods-use-this
  calculateTotalPrice(items: CartItemModel[]): number {
    return items.reduce((acc, cur) => acc + cur.food.price, 0);
  }
}

export default CartModel;
