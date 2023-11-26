import { useStore } from 'usestore-ts';
import MenuItem from '../components/MenuItem';
import usePayment from '../hooks/useFetchOrders';
import cartStore from '../stores/cartStore';
import createReceiptData from '../utils/createReceiptData';

export const testFn = () => {};

function Cart() {
  const [{ cartArray }, store] = useStore(cartStore);

  const payment = usePayment();

  const receiptData = createReceiptData(cartArray);

  return (
    <article data-testid="Cart">
      <h2>점심 바구니</h2>
      <ul>
        {cartArray.map((menu, index) => (
          <li data-testid="CartItem" key={`${menu.id}_${index}`}>
            <MenuItem
              menuItem={menu}
              index={index}
              btnLabel="취소"
              onClick={({ menuIndex }) => { store.removeCartItem(menuIndex); }}
            />
          </li>
        ))}
      </ul>
      <p data-testid="Payment">
        {`${receiptData.totalPrice.toLocaleString()}원`}
      </p>
      <button type="button" onClick={payment} disabled={!cartArray.length}>
        주문하기
      </button>
      <p>
        {`주문내역${cartArray.length}개`}
      </p>

      <p>
        <button onClick={() => store.clearCart()}>취소</button>
      </p>
    </article>
  );
}

export default Cart;
