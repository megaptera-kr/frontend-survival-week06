import { Food } from '../types';

interface CartItemProps {
    food: Food;
    index: number;
    removeCartItem: (index: number) => void;
}

export default function CartItem({ food, index, removeCartItem }
  : CartItemProps) {
  return (
    <li>
      <span>
        {food.name}
        (
        {food.price.toLocaleString()}
        원)
      </span>
      <button
        type="button"
        onClick={() => removeCartItem(index)}
      >
        X
      </button>
    </li>
  );
}
