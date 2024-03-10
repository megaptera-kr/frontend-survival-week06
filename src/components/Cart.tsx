/* eslint-disable comma-dangle */
import MenuItem from './MenuItem';

import useCartStore from '../hooks/useCartStore';
import OrderButtons from './OrderButtons';

export default function Cart() {
  const store = useCartStore();
  const { items } = store;

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {items.length ? (
        <div>
          <ul>
            {items.map((item) => (
              <MenuItem key={item.id} food={item}>
                <span>{` - 수량 : ${item.quantity}`}</span>
              </MenuItem>
            ))}
          </ul>
          <p>{`총 금액 : ${totalPrice.toLocaleString()}원`}</p>
          <OrderButtons />
        </div>
      ) : (
        <p>장바구니가 비어있습니다.</p>
      )}
    </div>
  );
}
