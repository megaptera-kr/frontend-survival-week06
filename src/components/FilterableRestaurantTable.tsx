import { useState } from 'react';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import SearchBar from './SearchBar';

import RestaurantTable from './RestaurantTable';

// TODO: 메가테라 푸트코트 키오스크를 완성해주세요.

export default function FilterableRestaurantTable() {
  const [restaurants] = useFetchRestaurants();
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');
  const categories = restaurants?.reduce(
    (acc: string[], restaurant) => (acc.includes(restaurant.category)
      ? acc : [...acc, restaurant.category]),
    [],
  );

  const filteredRestaurants = query
    ? restaurants.filter((restaurant) => restaurant.name.includes(query.trim()))
    : restaurants;

  const filteredCategories = category === '전체' ? filteredRestaurants : filteredRestaurants.filter((restaurant) => restaurant.category === category);

  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <SearchBar
        setCategory={setCategory}
        setQuery={setQuery}
        query={query}
        categories={categories}
      />
      <RestaurantTable restaurants={filteredCategories} />
    </div>
  );
}
