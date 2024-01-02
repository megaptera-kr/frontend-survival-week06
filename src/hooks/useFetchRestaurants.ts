import { useFetch } from 'usehooks-ts';
import Restaurant from '../types/Restaurant';

type Restaurants = {
    restaurants: Restaurant[]
}

export default function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>('http://localhost:3000/restaurants');

  if (!data) {
    return [];
  }

  return data.restaurants;
}
