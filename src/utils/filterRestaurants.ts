import Restaurant from '../types/Restaurants';
import normalize from './normalize';

type FilterCondition = {
  filterText: string;
  filterCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterCondition,
): Restaurant[] {
  const match = (restaurant: Restaurant) => (
    restaurant.category === filterCategory);

  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalize(filterText);

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
