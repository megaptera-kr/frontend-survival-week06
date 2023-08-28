import type { Restaurants } from '../types/restaurants';

export default function filterRestaurant(
  restaurants: Restaurants[],
  { query, category }: {query: string, category: string},
) {
  const filteredRestaurant = restaurants.filter((restaurant) => {
    if (category === '전체') return restaurant;
    return restaurant.category === category;
  });

  return filteredRestaurant.filter((restaurant) => restaurant.name.includes(query.trim()));
}
