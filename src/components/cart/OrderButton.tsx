import { useEffect } from 'react';
import useCartStore from '../../hooks/useCartStore';

export default function OrderButton() {
  const [{ cart }, store] = useCartStore();

  useEffect(() => {
    store.calculateTotalPrice(cart);
  }, [store, cart]);

  return (
    <button
      className="w-1/2 bg-blue-300 rounded-md py-2 px-4 mt-4"
      type="button"
      onClick={() => store.order()}
      name="주문하기"
    >
      주문하기
    </button>
  );
}
