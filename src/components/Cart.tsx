import useDispatch from '../hooks/useDispatch';
import { delCart } from '../stores/Stores';
import getCartFood from '../utils/getCartFood';
import CartItem from './CartItem';
import OrderButton from './OrderButton';

export default function Cart() {
  const cartItem = getCartFood();
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(delCart());
  }

  return (
    <div>
      <h3>점심 바구니</h3>
      {
        cartItem.map((food, index) => {
          const key = `${index}-${food.id}`;
          return (
            <CartItem key={key} food={food} />
          );
        })
      }
      <p>
        주문내역
        {cartItem.length}
        개
      </p>
      <button type="button" onClick={handleClick}> 취소 </button>
      <OrderButton />
    </div>
  );
}
