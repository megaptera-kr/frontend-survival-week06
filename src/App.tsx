import { useState } from 'react';

import useFetchRestaurants from './hooks/useFetchRestaurants';

import Cart from './components/Cart';
import RestaurantTable from './components/RestaurantTable';

import filterRestaurant from './utils/filterRestaurant';
import SearchBar from './components/SearchBar';
import extractCategories from './utils/extractCategories';

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('전체');

  const restaurants = useFetchRestaurants();

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurant(restaurants, { query, category });

  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <Cart />
      <SearchBar
        setQuery={setQuery}
        setCategory={setCategory}
        categories={categories}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
