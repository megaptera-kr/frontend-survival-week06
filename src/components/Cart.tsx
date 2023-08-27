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
    if (!menu.length) return;
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
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menu.length > 0 && menu.map((item, index) => {
          const key = `${item.id}-${index}`;
          return (
            <CartList key={key} item={item} index={index} onClickCancel={handleClickCancel} />
          );
        })}
      </ul>
      <div>
        <span style={{ marginRight: '1rem' }}>{`주문내역${menu.length}개`}</span>
        <span>{`${totalPrice.toLocaleString()}원`}</span>
      </div>
      <div>
        <button
          type="button"
          name="#주문"
          onClick={handleClickOrder}
        >
          주문하기
        </button>
        <button type="button" name="#취소" onClick={handleClickItem}>취소</button>
      </div>
    </div>
  );
}

export default Cart;
