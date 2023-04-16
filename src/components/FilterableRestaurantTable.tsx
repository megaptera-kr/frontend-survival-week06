import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import extractCategories from '../utils/extractCategories';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';
import filterRestaurants from '../utils/filterRestaurants';

type FilterableRestaurantTableType = {
  restaurants: Restaurant[]
};

export default function FilterableRestaurantTable(
  { restaurants } : FilterableRestaurantTableType,
) {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

  return (
    <div>
      <SearchBar
        categories={categories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
