import CartItemModel from './CartItemModel';

import fixtures from '../../fixtures';

describe('CartItemModel', () => {
  const { foods } = fixtures;

  it('Create instance of CartItemModel', () => {
    const food = foods[0];

    const instance = new CartItemModel({
      id: 1,
      food,
    });

    expect(instance).not.toBeNull();
    expect(instance.id).toBe(1);
    expect(instance.food).toEqual(food);
  });
});
