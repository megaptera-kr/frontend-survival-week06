import Restaurant from '../types/Restaurant';

export default function extractCategories(restaurants: Restaurant[]): string[] {
  return restaurants.reduce((acc: string[], cur: Restaurant) => (
    acc.includes(cur.category) ? acc : [...acc, cur.category]), []);
}
