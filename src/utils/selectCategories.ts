import DEFAULT_SELECTED_CATEGORY from '../constants/categories';
import { Restaurant } from '../types/restaurants';

export default function selectCategories(restaurants: Restaurant[]) {
  return restaurants
    .reduce<string[]>((acc, restaurant) => {
      const { category } = restaurant;
      if (!acc.includes(category)) {
        return [...acc, category];
      }

      return acc;
    }, [DEFAULT_SELECTED_CATEGORY]);
}
