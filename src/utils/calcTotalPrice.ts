import getCartFood from './getCartFood';

export default function calcTotalPrice() {
  const cartFood = getCartFood();
  return cartFood.reduce((acc, cur) => (
    acc + cur.price
  ), 0);
}
