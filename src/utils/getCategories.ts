import Restaurant from '../types/Restaurants';

export default function getCategories(restaurants: Restaurant[]) {
  return restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return acc.includes(category)
      ? acc
      : [...acc, category];
  }, []);
}
