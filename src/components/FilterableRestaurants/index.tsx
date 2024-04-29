import useFetchRestaurants from '../../hooks/useFetchRestaurants';
import getAllCategories from '../../utils/getAllCategories/getAllCategories';
import FilterCategory from '../FilterCategory';
import RestaurantsTable from '../RestaurantsTable';
import SearchBar from '../SearchBar';

function FilterableRestaurants() {
  const { restaurants } = useFetchRestaurants();

  const categories = getAllCategories(restaurants);
  return (
    <div>
      <SearchBar />

      <FilterCategory categories={categories} />

      <RestaurantsTable restaurants={restaurants} />
    </div>
  );
}

export default FilterableRestaurants;
