import calcPrice from './calcPrice';

import fixtures from '../../fixtures';

import type { Menu } from '../types/restaurants';

describe('calcPrice', () => {
  const { foods } = fixtures;

  it('Calculate the total price of an empty cart.', () => {
    const cart: Menu[] = [];
    const totalPrice = calcPrice(cart);
    expect(totalPrice).toBe(0);
  });

  it('Calculate the total price of the cart with items.', () => {
    const cart: Menu[] = foods;
    const totalPrice = calcPrice(cart);
    expect(totalPrice).toBe(13_000);
  });
});
