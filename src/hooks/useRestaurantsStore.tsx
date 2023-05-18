import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import RestaurantStore from '../components/stores/RestaurantStore';

export default function useRestaurantsStore() {
  const store = container.resolve(RestaurantStore);
  return useStore(store);
}
