import useCartStore from '../hooks/useCartStore';

import { Food } from '../types';
import key from '../utils/key';

import CartItem from './CartItem';

export default function Cart() {
  const [{ cart, foodCount, totalPrice }, store] = useCartStore();

  const handleClickRemove = (index: number) => {
    store.removeCartItem(index);
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
      <button
        type="button"
        onClick={() => store.resetCart()}
      >
        주문하기
      </button>
      <button
        type="button"
        onClick={() => store.resetCart()}
      >
        취소
      </button>
    </div>
  );
}
