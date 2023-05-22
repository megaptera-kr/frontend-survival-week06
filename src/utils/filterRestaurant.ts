import Restaurant from '../types/Restaurants';

type filterRestaurantCondition = {
    filterText: string,
    filterCategory: string,
}

export default function filterRestaurant(
  restaurants,
  { filterText, filterCategory }: filterRestaurantCondition,
) {
  let filteredRestaurant = filterText.length
    ? restaurants.filter(({ name }: {name: string}) => name.includes(filterText))
    : restaurants;

  if (filterCategory !== '전체') {
    filteredRestaurant = filteredRestaurant.filter(({
      category,
    }: {category: string}) => category === filterCategory);
  }

  return filteredRestaurant;
}
