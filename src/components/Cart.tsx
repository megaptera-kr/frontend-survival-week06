import MenuItem from './MenuItem';

import useCartStore from '../hooks/useCartStore';
import OrderButtons from './OrderButtons';

export default function Cart() {
  const store = useCartStore();
  const { items } = store;

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      {items.length ? (
        <div>
          <ul>
            {items.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <MenuItem key={`${item.id}_${index}`} food={item}>
                <button type="button">X</button>
              </MenuItem>
            ))}
          </ul>
          <p>{`주문내역${items.length}개`}</p>
          <p>{`${totalPrice.toLocaleString()}원`}</p>
          <OrderButtons />
        </div>
      ) : (
        <p>장바구니가 비어있습니다.</p>
      )}
    </div>
  );
}
