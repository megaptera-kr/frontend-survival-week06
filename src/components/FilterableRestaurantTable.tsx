import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import useFetchRestaurant from '../hooks/useFetchRestaurant';

import extractCategories from '../utils/extractCategories';
import filterRestaurants from '../utils/filterRestaurants';

export default function FilterableRestaurantTable() {
  const restaurants = useFetchRestaurant();

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const filterCategories = extractCategories(restaurants);
  const filteredRestaurant = filterRestaurants(restaurants, {
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
