import { useEffect } from 'react';
import useCartStore from '../../hooks/useCartStore';

export default function OrderInfo() {
  const [{ cart }, store] = useCartStore();

  useEffect(() => {
    store.calculateTotalPrice(cart);
  }, [store, cart]);
  return (
    <div className="w-full flex justify-between mt-4">
      <div className="w-1/2 text-center text-xl font-semibold">
        주문내역
        {' '}
        {cart.length}
        개
      </div>
      <div className="w-1/2 text-center text-xl font-semibold">
        {store.totalPrice.toLocaleString()}
        원
      </div>
    </div>
  );
}
