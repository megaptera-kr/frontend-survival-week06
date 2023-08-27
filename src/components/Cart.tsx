import CartList from './CartList';

import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';
import { clearItem, removeItem } from '../stores/actions/cart.action';
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

  const handleClickCancel = (index: number) => {
    dispatch(removeItem(index));
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ listStyle: 'none' }}>
        {menu.length > 0 && menu.map((item, index) => {
          const key = `${item.id}-${index}`;
          return (
            <CartList key={key} item={item} index={index} onClickCancel={handleClickCancel} />
          );
        })}
      </ul>
      <div>
        <button
          type="button"
          name="#주문"
          onClick={handleClickOrder}
        >
          {`합계: ${totalPrice.toLocaleString()}원 주문`}
        </button>
        <button type="button" name="#취소" onClick={handleClickItem}>취소</button>
      </div>
    </div>
  );
}

export default Cart;
