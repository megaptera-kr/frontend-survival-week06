import MenuItem from './MenuItem';

import OrderButtons from './OrderButtons';

import useCartStore from '../hooks/useCartStore';

export default function Cart() {
  const store = useCartStore();
  const { items } = store;

  const RemoveItem = (index: number) => {
    store.removeItem(index);
  };

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <p>{`주문내역${items.length}개`}</p>
      {items.length ? (
        <div>
          <ul>
            {items.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <MenuItem key={`${item.id}_${index}`} food={item}>
                <button type="button" onClick={() => RemoveItem(index)}>
                  X
                </button>
              </MenuItem>
            ))}
          </ul>
          <p>{`${totalPrice.toLocaleString()}원`}</p>
          <OrderButtons />
        </div>
      ) : (
        <p>장바구니가 비어있습니다.</p>
      )}
    </div>
  );
}
