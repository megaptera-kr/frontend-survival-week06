import { useState } from 'react';

import { Restaurant } from '../types/restaurant';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import DEFAULT_SELECTED_CATEGORY from '../constants/categories';

import filterRestaurants from '../utils/filterRestaurants';
import selectCategories from '../utils/selectCategories';

interface FilterableRestaurantsTableProps {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setCategory] = useState(DEFAULT_SELECTED_CATEGORY);

  const filteredRestaurants = filterRestaurants(restaurants, {
    searchKeyword,
    selectedCategory,
  });

  const categories = selectCategories(restaurants);

  return (
    <div>
      <SearchBar
        value={searchKeyword}
        setValue={setSearchKeyword}
        categories={categories}
        setCategory={setCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}
