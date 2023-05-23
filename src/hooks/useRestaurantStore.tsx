import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import RestaurantStore from '../stores/RestaurantStore';

export default function useRestaurantStore() {
  const store = container.resolve(RestaurantStore);

  return useStore(store);
}
