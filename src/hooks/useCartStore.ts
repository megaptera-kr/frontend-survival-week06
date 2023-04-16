import { container } from 'tsyringe';

import useObjectStore from './useObjectStore';
import CartStore from '../stores/CartStore';

export default function useCartStore() {
  const store = container.resolve(CartStore);

  return useObjectStore(store);
}
