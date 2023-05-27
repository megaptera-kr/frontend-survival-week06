import { useState } from 'react';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import extractCategories from '../utils/extractCategories';
import filterRestaurants from '../utils/filterRestaurants';

import FilterButtons from './FilterButtons';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

export default function FilterableRestaurantTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurants();

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, filterText, filterCategory);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <FilterButtons
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
