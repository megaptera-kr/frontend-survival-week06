import { Restaurants } from '../types/restaurants';

export default function extractCategories(restaurants: Restaurants[]) {
  return restaurants.reduce((acc: string[], cur: Restaurants) => {
    const { category } = cur;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
