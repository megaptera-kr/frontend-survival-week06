import { singleton } from 'tsyringe';

import BaseStore from './BaseStore';
import CartModel from '../../models/CartModel';
import CartItemModel from '../../models/CartItemModel';

import Food from '../../types/FoodType';

export type CartStoreSnapshot = {
  items: CartItemModel[];
  totalPrice: number;
};

@singleton()
class CartStore extends BaseStore<CartStoreSnapshot> {
  private cartModel = new CartModel();

  constructor() {
    super();
    this.takeSnapshot();
  }

  takeSnapshot() {
    this.snapshot = {
      items: this.cartModel.items,
      totalPrice: this.cartModel.totalPrice,
    };
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  addItem({ id, name, price }: Food) {
    this.cartModel = this.cartModel.addItem({ id, name, price });
    this.update();
  }

  removeItem(cartId: number) {
    this.cartModel = this.cartModel.removeItem(cartId);
    this.update();
  }

  clear() {
    this.cartModel = this.cartModel.clear();
    this.update();
  }
}

export default CartStore;
