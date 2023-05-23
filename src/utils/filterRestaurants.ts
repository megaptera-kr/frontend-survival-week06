import Restaurant from '../types/restaurant';

type filterByProps = {
  text: string;
  category: string;
}

function trimString(text: string) {
  return text.trim().toLowerCase();
}

export default function filterRestaurants(restaurants: Restaurant[], filterBy: filterByProps) {
  const category = filterBy.category || '전체';
  let filteredRestaurant = restaurants;
  if (category !== '전체') {
    filteredRestaurant = restaurants.filter(
      (restaurant: Restaurant) => restaurant.category === filterBy.category,
    );
  }

  return filteredRestaurant.filter(
    (restaurant: Restaurant) => restaurant.name.includes(trimString(filterBy.text)),
  );
}
