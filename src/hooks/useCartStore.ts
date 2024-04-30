import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CartStore from '../stores/CartStore';

function useCartStore() {
  const store = container.resolve(CartStore);
  return useStore(store);
}

export default useCartStore;
