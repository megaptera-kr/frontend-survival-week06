import { singleton } from 'tsyringe';

import CartItemModel from '../models/CartItemModel';

import OrderResponse from '../types/OrderResponseType';

@singleton()
class OrderAPI {
  readonly url: URL = new URL('http://localhost:3000/orders');

  async create({
    cartItems,
    totalPrice,
  }: {
    cartItems: CartItemModel[];
    totalPrice: number;
  }): Promise<OrderResponse> {
    const body = {
      menu: cartItems.map((cartItem: CartItemModel) => cartItem.food),
      totalPrice,
    };

    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Fail to create data. Status: ${response.status}`);
    }

    return response.json();
  }
}

export default OrderAPI;
