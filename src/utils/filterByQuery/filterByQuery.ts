import { Category } from '../../types/Category';
import { Restaurant } from '../../types/restaurant';

function filterByQuery(
  restaurants: Restaurant[],
  { text, category }: {text:string, category:Category},
) {
  return restaurants.filter((restaurant) => (
    category === '전체'
      ? restaurant.name.includes(text)
      : restaurant.category === category && restaurant.name.includes(text)));
}

export default filterByQuery;
