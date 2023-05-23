import { useState } from 'react';
import { Restaurant } from '../types/restaurants';
import RestaurantItem from './RestaurantItem';
import SearchBar from './SearchBar';
import filterRestaurants from '../utils/filterRestaurants';
import extractCategories from '../utils/extractCategories';

type Props = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsList({ restaurants }: Props) {
  const [keyword, setKeyword] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = extractCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, { keyword, selectedCategory });

  return (
    <section>
      <SearchBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <section className="flex">
        <h2>식당 이름</h2>
        <h2>종류</h2>
        <h2>메뉴</h2>
      </section>
      <ul>
        {filteredRestaurants && filteredRestaurants.map((item) => (
          <RestaurantItem key={item.id} data={item} />
        ))}
      </ul>
    </section>

  );
}
