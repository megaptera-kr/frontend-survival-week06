import RestaurantTable from './RestaurantTable';

import useFetchRestaurant from '../hooks/useFetchRestaurant';

export default function FilterableRestaurantTable() {
  const restaurants = useFetchRestaurant();

  return (
    <div>
      <RestaurantTable restaurants={restaurants} />
    </div>
  );
}
