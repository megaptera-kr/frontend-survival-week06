import useStore from '../hooks/useStore';
import Restaurant from '../type/Restaurant';

type filterRestaurantsProps = {
  restaurants : Restaurant[]
}

export default function filterRestaurants({ restaurants }: filterRestaurantsProps) {
  const store = useStore();
  const filteredRestaurants = restaurants.filter(
    (restaurant) => (
      restaurant.category === store.state.category || store.state.category === '전체'
    ),
  ).filter(
    (restaurant) => (
      (restaurant.name).includes((store.state.inputText).trim())
    ),
  );
  return filteredRestaurants;
}
