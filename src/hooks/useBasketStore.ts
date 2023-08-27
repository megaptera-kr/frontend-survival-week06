import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';

import BasketStore from '../stores/BasketStore';

export default function useBasketStore() {
  const basketStore = container.resolve(BasketStore);

  return useStore(basketStore);
}
