import { useState } from 'react';
import { Restaurant } from '../types/restaurants';
import RestaurantItem from './RestaurantItem';
import SearchBar from './SearchBar';
import filterRestaurants from '../utils/filterRestaurants';

type Props = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsList({ restaurants }: Props) {
  const [keyword, setKeyword] = useState<string>('');

  const filteredRestaurants = filterRestaurants(restaurants, { keyword });

  return (
    <section>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
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
