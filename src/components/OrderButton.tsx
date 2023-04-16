import { container } from 'tsyringe';
import Food from '../types/Food';
import CartStore from '../stores/CartStore';

type OrderButtonProps = {
    foods: Food[];
    onClick: () => void;
}

export default function OrderButton({ foods, onClick }: OrderButtonProps) {
  const cartStore = container.resolve(CartStore);
  const totalPrice = foods.reduce((acc, cur) => acc + cur.price, 0);
  // const totalPrice = cartStore.totalPrice;

  return (
    <button
      type="button"
      onClick={onClick}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
