import { useFetch } from 'usehooks-ts';
import { Restaurant } from '../types/restaurants';

const url = 'http://localhost:3000/restaurants';

interface Restaurants {
  [restaurnats: string]: Restaurant[];
}

export default function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>(url);

  return data?.restaurants ?? [];
}
