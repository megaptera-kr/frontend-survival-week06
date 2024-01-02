import { useState } from 'react';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import getCategories from '../utils/getCategories';
import RestaurantsTable from './RestaurantsTable';
// import Restaurant from '../types/Restaurant';
import SearchBar from './SearchBar';
import filterRestaurant from '../utils/filterRestaurant';

// type FilterableRestaurantsTableProps = {
//   restaurants: Restaurant[]
// }

export default function FilterableRestaurantsTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const restaurants = useFetchRestaurants();
  const categories = getCategories(restaurants);

  // filterText와 filterCategory로 식당목록 필터링
  const filteredRestaurant = filterRestaurant(
    { restaurants, filterText, filterCategory },
  );

  return (
    <>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>식당이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <RestaurantsTable restaurants={filteredRestaurant} />
      </table>
    </>
  );
}
