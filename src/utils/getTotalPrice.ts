import Menu from '../types/Menu';

export default function getTotalPrice(items: Menu[]) {
  return items.reduce((acc: number, item) => acc + item.price, 0);
}
