import Restaurants from '../types/Restaurants';

export default function filterRestaurant({ restaurants, filterText, filterCategory }: {
  restaurants: Restaurants[];
  filterText: string;
  filterCategory: string;
}) {
  let filteredRestaurants = restaurants;

  const query = filterText.trim().toLowerCase();

  const filteredName = filteredRestaurants
    .filter((filteredRestaurant) => filteredRestaurant.name.includes((query).toLowerCase()));

  const filteredCategory = filteredRestaurants
    .filter((categories) => categories.category === filterCategory);

  if (query) {
    filteredRestaurants = filteredName;
  }

  if (filterCategory !== '전체') {
    filteredRestaurants = filteredCategory;
  }

  return filteredRestaurants;
}
