import { useState } from 'react';
import useFetchRestaurant from '../hooks/useFetchRestaurant';
import filterCategories from '../utils/filterCategories';
import RestaurantsTable from './RestaurantsTable';
import filterRestaurants from '../utils/filterRestaurants';
import FilterRestaurants from './FilterRestaurants';

export default function FilterableRestaurantsTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurant();
  const restaurantsCategories = filterCategories(restaurants);

  // eslint-disable-next-line max-len
  const filteredRestaurants = filterRestaurants(restaurants, { text: filterText, category: filterCategory });

  return (
    <div>
      <FilterRestaurants
        restaurantsCategories={restaurantsCategories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </div>
  );
}
