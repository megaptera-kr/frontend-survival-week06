import { Restaurant } from '../types';

const extractCategories = (restaurants : Restaurant[]) => {
  const categoryList = new Set<string>();

  restaurants.forEach((restaurant) => {
    categoryList.add(restaurant.category);
  });

  const categories = ['전체', ...categoryList];

  return categories;
};

export default extractCategories;
