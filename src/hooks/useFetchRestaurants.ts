import { useFetch } from 'usehooks-ts';

import type { Restaurants } from '../types/restaurants';

function useFetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<{restaurants: Restaurants[]}>(url);

  if (!data) return [];

  const { restaurants } = data;
  return restaurants;
}

export default useFetchRestaurants;
