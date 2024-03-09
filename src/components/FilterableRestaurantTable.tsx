import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import useFetchRestaurant from '../hooks/useFetchRestaurant';
import filterRestaurant from '../utils/filterRestaurant';
import extractCategories from '../utils/extractCategories';

export default function FilterableRestaurantTable() {
  const restaurants = useFetchRestaurant();

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const filterCategories = extractCategories(restaurants);
  const filteredRestaurant = filterRestaurant(restaurants, {
    filterText,
    filterCategory,
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        categories={filterCategories}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurant} />
    </div>
  );
}
