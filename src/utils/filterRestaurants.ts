import { Restaurant } from '../types';

const filterRestaurants = (
  restaurants : Restaurant[],
  filterText : string,
  filterCategory : string,
) => {
  const normalize = (str : string) => str.trim().toLowerCase();

  const filteredWithText = restaurants.filter((restaurant) => {
    const RestaurantName = normalize(restaurant.name);
    return RestaurantName.includes(normalize(filterText));
  });

  if (filterCategory === '전체') {
    return filteredWithText;
  }

  const filteredRestaurants = filteredWithText.filter((restaurant) => {
    const RestaurantCategory = restaurant.category;
    return RestaurantCategory === filterCategory;
  });

  return filteredRestaurants;
};

export default filterRestaurants;
