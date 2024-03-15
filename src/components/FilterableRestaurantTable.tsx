import { useState } from 'react';

import useFetchRestaurants from '../hooks/useFetchRestaurant';
import selectCategories from '../utils/selectCategories';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import filterRestaurants from '../utils/filterRestaurants';

function FilterableRestaurantTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurants();
  const categories = selectCategories(restaurants);
  const filteredRestaurants = filterRestaurants(
    restaurants
    , { filterText, filterCategory },
  );

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable
        restaurants={filteredRestaurants}
      />
    </div>
  );
}

export default FilterableRestaurantTable;
