import useCartStore from '../hooks/useCartStore';

import { Food } from '../types';

import key from '../utils/key';

import CartItem from './CartItem';
import CartButtons from './CartButtons';

export default function Cart() {
  const [{ cart, foodCount, totalPrice }, store] = useCartStore();

  const handleClickRemove = (index: number) => {
    store.removeCartItem(index);
  };

  const handleClickReset = () => {
    store.resetCart();
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {cart.map((food:Food, index:number) => (
          <CartItem
            key={key(food.name, index)}
            food={food}
            index={index}
            removeCartItem={handleClickRemove}
          />
        ))}
      </ul>
      <p>
        주문내역
        {foodCount}
        개
      </p>
      <p>
        총 합계 :
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
      <CartButtons
        resetCart={handleClickReset}
      />
    </div>
  );
}
