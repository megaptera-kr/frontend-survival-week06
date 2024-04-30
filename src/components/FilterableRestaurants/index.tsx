import { useState } from 'react';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';
import { Category } from '../../types/Category';
import filterByQuery from '../../utils/filterByQuery/filterByQuery';
import getAllCategories from '../../utils/getAllCategories/getAllCategories';
import FilterCategory from '../FilterCategory';
import RestaurantsTable from '../RestaurantsTable';
import SearchBar from '../SearchBar';

function FilterableRestaurants() {
  const [filterText, setFilterText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');

  const { restaurants } = useFetchRestaurants();

  const categories = getAllCategories(restaurants);

  const filterRestaurants = filterByQuery(
    restaurants,
    { text: filterText.trim(), category: selectedCategory },
  );
  return (
    <div>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />

      <FilterCategory
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <RestaurantsTable restaurants={filterRestaurants} />
    </div>
  );
}

export default FilterableRestaurants;
