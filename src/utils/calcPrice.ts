import type { Menu } from '../types/restaurants';

export default function calcPrice(cart: Menu[]) {
  return cart.reduce((acc, cartItem) => acc + cartItem.price, 0);
}
