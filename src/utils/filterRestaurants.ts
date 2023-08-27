import DEFAULT_SELECTED_CATEGORY from '../constants/categories';
import { Restaurant } from '../types/restaurants';

type filterRestaurantsOptions = {
  searchKeyword: string;
  selectedCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  {
    searchKeyword,
    selectedCategory,
  }: filterRestaurantsOptions,
) {
  if (!searchKeyword && selectedCategory === DEFAULT_SELECTED_CATEGORY) {
    return restaurants;
  }

  return restaurants
    .filter((restaurant) => (
      restaurant.name.includes(searchKeyword.trim())
    ))
    .filter(({ category }) => {
      if (!selectedCategory || selectedCategory === DEFAULT_SELECTED_CATEGORY) {
        return true;
      }

      return category === selectedCategory;
    });
}
