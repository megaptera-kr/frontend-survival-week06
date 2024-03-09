import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import useFetchRestaurant from '../hooks/useFetchRestaurant';
import filterRestaurant from '../utils/filterRestaurant';

export default function FilterableRestaurantTable() {
  const restaurants = useFetchRestaurant();

  const [filterText, setFilterText] = useState('');

  const filteredRestaurant = filterRestaurant(restaurants, filterText);

  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <RestaurantTable restaurants={filteredRestaurant} />
    </div>
  );
}
