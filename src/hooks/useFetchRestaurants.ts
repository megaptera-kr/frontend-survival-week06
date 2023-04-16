import { useFetch } from 'usehooks-ts';
import Restaurants from '../types/Restaurants';

export default function useFetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<{restaurants: Restaurants[]}>(url);
  if (!data) {
    return [];
  }

  return data.restaurants;
}
