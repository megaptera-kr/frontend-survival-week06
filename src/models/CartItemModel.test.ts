import CartItemModel from './CartItemModel';

import fixtures from '../../fixtures';

test('CartItemModel', () => {
  const { foods } = fixtures;

  const food = foods[0];

  const instance = new CartItemModel({
    id: 1,
    food,
  });

  expect(instance).not.toBeNull();
  expect(instance.id).toBe(1);
  expect(instance.food).toEqual(food);
});
