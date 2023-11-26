import { useState } from 'react';
import SearchBar from './SearchBar';

import extractCategories from '../utils/extractCategories';
import filteredRestaurantData from '../utils/filteredRestaurantData';

import RestaurantTable from './RestaurantTable';

import type Restaurant from '../types/Restaurant';

export default function FilteredRestaurantTable({ restaurants }:{ restaurants: Restaurant[]}) {
  const [filterText, setFilterText] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');
  const categories = extractCategories(restaurants);
  const filterData = filteredRestaurantData(restaurants, { filterText, category });
  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        categories={categories}
        setCategory={setCategory}
      />
      <RestaurantTable restaurants={filterData} />
    </div>
  );
}
