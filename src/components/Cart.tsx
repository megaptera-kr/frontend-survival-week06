import MenuItem from './MenuItem';

import useCartStore from '../hooks/useCartStore';

import { moneyformat } from '../utils/common';

export default function Cart() {
  const [snapshot, cartStore] = useCartStore();
  const { items: cartItems, totalPrice } = snapshot;

  const handleClick = (itemId: number) => {
    cartStore.removeItem(itemId);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>주문 바구니</h2>
      {!cartItems.length ? (
        <p>선택한 메뉴가 없습니다.</p>
      ) : (
        <ul style={{ width: '20%' }}>
          {cartItems.map((cartItem) => (
            <MenuItem key={cartItem.id} menuItem={cartItem.food}>
              <button
                style={{ marginLeft: '.5rem' }}
                type='button'
                name={`#cancel-cartitem-${cartItem.id}`}
                onClick={() => handleClick(cartItem.id)}
              >
                취소
              </button>
            </MenuItem>
          ))}
        </ul>
      )}

      <button type='button' value={totalPrice}>
        합계: {moneyformat(totalPrice)}원 주문
      </button>
    </div>
  );
}
