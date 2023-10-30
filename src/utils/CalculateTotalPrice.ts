import Food from '../Types/Food';

export default function calculateTotalPrice(menu: Food[]) {
  return menu.reduce((acc, cur) => acc + cur.price, 0);
}
