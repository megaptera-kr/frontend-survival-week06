import { useEffect } from 'react';
import useRestaurantsStore from '../../hooks/useRestaurantsStore';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

export default function FilterableRestaurants() {
  const [, store] = useRestaurantsStore();

  useEffect(() => {
    store.fetchRestaurants();
  }, []);

  return (
    <div>
      <SearchBar />
      <RestaurantTable />
    </div>
  );
}
