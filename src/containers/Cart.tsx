import MenuItem from '../components/MenuItem';
import useFetchOrders from '../hooks/useFetchOrders';
import { useCartStorage } from '../hooks/useStorage';
import createReceiptData from '../utils/createReceiptData';

export const testFn = () => {};

function Cart() {
  const { cart, handleRemoveCart } = useCartStorage();

  const { payment } = useFetchOrders();

  const receiptData = createReceiptData(cart);

  return (
    <article data-testid="Cart">
      <h2>점심 바구니</h2>
      <ul>
        {cart.map((menu, index) => (
          <li data-testid="CartItem" key={`${menu.id}_${index}`}>
            <MenuItem
              menuItem={menu}
              index={index}
              btnLabel="취소"
              onClick={handleRemoveCart}
            />
          </li>
        ))}
      </ul>
      <button data-testid="Payment" type="button" onClick={payment} disabled={!cart.length}>
        {`합계: ${receiptData.totalPrice.toLocaleString()}원 주문`}
      </button>
    </article>
  );
}

export default Cart;
