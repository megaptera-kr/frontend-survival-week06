import Menu from '../types/Menu';

export default function calculateTotalPrice(cart: Menu[]) {
  return cart.reduce((acc, curr) => acc + curr.price, 0);
}
