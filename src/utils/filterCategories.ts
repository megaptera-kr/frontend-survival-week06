import Restaurant from '../types/restaurant';

export default function filterCategories(restaurants: Restaurant[]) {
  return restaurants.reduce((curr: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return (curr.includes(category)) ? curr : [...curr, restaurant.category];
  }, ['전체']);
}
