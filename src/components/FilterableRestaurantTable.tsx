import { useState } from 'react';
import Restaurant from '../Types/Restaurant';
import filterRestaurants from '../utils/filterRestaurants';
import RestaurantTable from './RestaurantTable';
import extractCategories from '../utils/extractCategories';
import SearchBar from './SearchBar';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  });
  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
