export default function Cart() {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>주문 바구니</h2>
      <ul style={{ width: '20%' }}>
        <li
          style={{
            display: 'flex',
            paddingBlock: '.5rem',
          }}
        >
          <span>짜장면(8,000원)</span>
        </li>
      </ul>
      <button type='button'>합계: 8,000 원 주문</button>
    </div>
  );
}
