import apiPostCreateOrder from '../api/apiPostCreateOrder';
import useCartStore from './useCartStore';

export default function useCart() {
  const [{ cart }, store] = useCartStore();
  const handleOrderInCart = async () => {
    await apiPostCreateOrder(cart);
    store.clearOrder();
  };

  return { handleOrderInCart };
}
