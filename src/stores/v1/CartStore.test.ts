import CartStore from './CartStore';

import CartItemModel from '../../models/CartItemModel';

import fixtures from '../../../fixtures';

test('CartStore', () => {
  const handleChange = jest.fn();
  const { foods } = fixtures;
  const food = foods[0];

  const cartStore = new CartStore();

  cartStore.addListener(handleChange);
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
