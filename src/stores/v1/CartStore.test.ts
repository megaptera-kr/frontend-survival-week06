import CartStore from './CartStore';

import CartItemModel from '../../models/CartItemModel';

import fixtures from '../../../fixtures';

test('CartStore', () => {
  const cartStore = new CartStore();

  const handleChange = jest.fn();

  cartStore.addListener(handleChange);

  const { foods } = fixtures;
  const food = foods[0];

  cartStore.addItem({ ...food });

  expect(handleChange).toBeCalled();

  expect(cartStore.getSnapshot()).toEqual({
    items: [
      new CartItemModel({
        id: 1,
        food,
      }),
    ],
    totalPrice: food.price,
  });
});
