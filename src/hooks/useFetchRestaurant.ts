import { useFetch } from 'usehooks-ts';
import Restaurant from '../types/restaurant';

type RestaurantsData = {
  restaurants: Restaurant[];
}

export default function useFetchRestaurant(): Restaurant[] {
  const baseUrl = 'http://localhost:3000';
  const { data } = useFetch<RestaurantsData>(`${baseUrl}/restaurants`);
  if (!data) {
    return [];
  }
  return data.restaurants;
}
