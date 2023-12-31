import Restaurant from '../types/Restaurant';

type filterRestaurantProps = {
    restaurants:Restaurant[]
    filterText:string
    filterCategory:string
}

export default function filterRestaurant(
  {
    restaurants,
    filterText, filterCategory,
  }:filterRestaurantProps,
) {
  const categoryFiltered = filterCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === filterCategory);

  if (!filterText) {
    return categoryFiltered;
  }

  return categoryFiltered.filter(
    (restaurant) => restaurant.name.includes(filterText.trim().toLocaleLowerCase()),
  );
}
