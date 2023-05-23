import useCartStore from '../../../hooks/useCartStore';

export default function CartUtils() {
  const store = useCartStore();

  const handleClearCart = () => {
    store.clear();
  };

  const handleOrder = () => {
    // eslint-disable-next-line no-alert
    alert('order success');
    store.clear();
  };

  return (
    <div style={{ display: 'flex', columnGap: '8px' }}>
      <div>
        <p>{`총 주문 개수: ${store.getTotalCount()}개`}</p>
        <p>{`총 주문 금액: ${store.getTotalPrice()}원`}</p>
      </div>
      <button type="button" onClick={handleClearCart}>비우기</button>
      <button type="button" onClick={handleOrder}>주문하기</button>
    </div>
  );
}
