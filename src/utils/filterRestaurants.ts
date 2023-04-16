import Restaurant from '../types/Restaurant';

type filterRestaurantsProps = {
  filterText: string,
  filterCategory: string,
}

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: filterRestaurantsProps,
): Restaurant[] {
  const categoryFilter = (restaurant: Restaurant) => restaurant.category === filterCategory;

  const filteredRestaurants = filterCategory === '전체'
    ? restaurants : restaurants.filter(categoryFilter);

  const query = normalize(filterText);

  const nameFilter = (restaurant: Restaurant) => restaurant.name.includes(query);

  return filteredRestaurants.filter(nameFilter);
}
