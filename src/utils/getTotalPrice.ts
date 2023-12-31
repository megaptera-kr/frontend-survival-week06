import Food from '../types/Food';

export default function getTotalPrice(cart:Food[]) {
  return cart.reduce((acc, food) => acc + food.price, 0);
}
