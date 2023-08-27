import CartList from './CartList';

import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';
import { clearItem } from '../stores/actions/cart.action';
import calcPrice from '../utils/calcPrice';

function Cart() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  const totalPrice = calcPrice(menu);

  const handleClickOrder = () => {
    dispatch(clearItem());
  };

  const handleClickItem = () => {
    dispatch(clearItem());
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ listStyle: 'none' }}>
        {menu.length > 0 && menu.map((item, index) => {
          const key = `${item.id}-${index}`;
          return (
            <CartList key={key} item={item} index={index} />
          );
        })}
      </ul>
      <div>
        <button
          type="button"
          onClick={handleClickOrder}
        >
          {`합계: ${totalPrice.toLocaleString()}원 주문`}
        </button>
        <button type="button" onClick={handleClickItem}>취소</button>
      </div>
    </div>
  );
}

export default Cart;
