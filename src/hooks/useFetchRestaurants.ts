import { useFetch } from 'usehooks-ts';

import { Restaurant } from '../types';

const useFetchRestaurants = () => {
  const url = 'http://localhost:3000/restaurants';

  const { data } = useFetch<Record<string, Restaurant[]>>(url);

  if (!data) return [];
  return data.restaurants;
};

export default useFetchRestaurants;
