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
  private cartmodel = new CartModel();

  constructor() {
    super();
    this.takeSnapshot();
  }

  takeSnapshot() {
    this.snapshot = {
      items: this.cartmodel.items,
      totalPrice: this.cartmodel.totalPrice,
    };
  }

  private update() {
    this.takeSnapshot();
    this.publish();
  }

  addItem({ id, name, price }: Food) {
    this.cartmodel = this.cartmodel.addItem({ id, name, price });
    this.update();
  }

  removeItem(cartId: number) {
    this.cartmodel = this.cartmodel.removeItem(cartId);
    this.update();
  }

  removeAllItems() {
    this.cartmodel = this.cartmodel.removeAllItems();
    this.update();
  }
}

export default CartStore;
