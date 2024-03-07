import fixtures from '../../fixtures';
import MenuItem from './MenuItem';

export default function Cart() {
  const { cartItems } = fixtures;

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>주문 바구니</h2>
      <ul style={{ width: '20%' }}>
        {cartItems.map((item) => (
          <MenuItem key={item.id} menuItem={item}>
            <button style={{ marginLeft: '.5rem' }} type='button'>
              취소
            </button>
          </MenuItem>
        ))}
      </ul>
      <button type='button'>합계: 8,000 원 주문</button>
    </div>
  );
}
