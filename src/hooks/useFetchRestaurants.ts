import { useFetch } from 'usehooks-ts';
import type { Restaurant } from '../types/restaurants';

interface UseFetchRestaurants {
  restaurants: Restaurant[];
}

const baseUrl = 'http://localhost:3000';

type RestaurantsRequest = {
  restaurants: Restaurant[];
}

export default function useFetchRestaurants(): UseFetchRestaurants {
  const { data } = useFetch<RestaurantsRequest>(`${baseUrl}/restaurants`);

  return {
    restaurants: data?.restaurants ?? [],
  };
}
