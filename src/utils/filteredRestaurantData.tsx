import type Restaurant from '../types/Restaurant';

type filteredCondition = {
  filterText: string;
  category: string
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filteredRestaurantData(
  restaurants: Restaurant[],
  { filterText, category }: filteredCondition,
) {
  const match = (restaurant: Restaurant) => (restaurant.category === category);

  const filteredRestaurants = category === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalize(filterText);

  if (!query) {
    return filteredRestaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return filteredRestaurants.filter(contains);
}
