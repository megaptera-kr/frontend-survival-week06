import { Category } from '../../types/Category';
import { Restaurant } from '../../types/restaurant';

function getAllCategories(restaurants: Restaurant[]) {
  return restaurants.reduce(
    (
      acc:Category[],
      { category },
    ) => (acc.includes(category) ? acc : [...acc, category])
    , ['전체'],
  );
}

export default getAllCategories;
