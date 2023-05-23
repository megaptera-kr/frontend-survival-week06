import { useState } from 'react';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';
import filterRestaurant from '../utils/filterRestaurant';
import Restaurant from '../types/Restaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import getCategories from '../utils/getCategories';

export default function FilterableTable() {
  const restaurants: Restaurant[] = useFetchRestaurants();

  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = getCategories(restaurants);

  const filteredRestaurants = filterRestaurant(restaurants, { filterText, filterCategory });

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
