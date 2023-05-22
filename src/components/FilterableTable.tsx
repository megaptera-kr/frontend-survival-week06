import { useEffect, useState } from 'react';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';
import filterRestaurant from '../utils/filterRestaurant';
import Restaurant from '../types/Restaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function FilterableTable() {
  let restaurants;

  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = ['중식', '일식'];

  const filteredRestaurants = filterRestaurant(restaurants, { filterText, filterCategory });

  useEffect(() => {
    (async () => {
      const data = await useFetchRestaurants();
      restaurants = data;
      console.log(restaurants);
    })();
  }, []);

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      {restaurants && (
        <RestaurantTable
          restaurants={restaurants}
        />
      )}
    </div>
  );
}
