import { Category, Restaurant } from '../types/restaurant';

export default function categories(restaurants:Restaurant[]):Category[] {
  if (!restaurants) {
    return ['전체'];
  }

  return restaurants.reduce((acc: Category[], cur) => (acc.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
}
