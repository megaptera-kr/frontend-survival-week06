import useCartStore from '../../../hooks/useCartStore';
import { Food } from '../../../types/food';
import CartItem from './item/CartItem';

export default function CartList() {
  const { cart, removeCartItem, addCartItem } = useCartStore();

  const handleDecreaseCartItem = (food: Food) => () => {
    removeCartItem(food);
  };

  const handleIncreaseCartItem = (food: Food) => () => {
    addCartItem(food);
  };

  return (
    <ul>
      {
        cart.map((item) => (
          <li key={item.id}>
            <CartItem
              cartItem={item}
              onDecrease={handleDecreaseCartItem(item)}
              onIncrease={handleIncreaseCartItem(item)}
            />
          </li>
        ))
      }
    </ul>
  );
}
