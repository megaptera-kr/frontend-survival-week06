import { useFetch } from 'usehooks-ts';
import Restaurant from '../type/Restaurant';

type Restaurants = {
  [restaurants: string]: Restaurant[];
}

const emptyRestanrants = [] as Restaurant[];

export default function useFetchRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const test = useFetch<Restaurants>(url);
  if (!test.data) {
    return emptyRestanrants;
  }
  return test.data.restaurants;
}
