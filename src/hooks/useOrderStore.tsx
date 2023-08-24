import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import OrderStore from '../stores/OrderStore';

export default function useOrderStore() {
  const store = container.resolve(OrderStore);

  return useStore(store);
}
