import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';

import selectCategories from '../../utils/selectCategories';

import useCategoryFilter from '../../hooks/useCategoryFilter';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';

export default function RestaurantContainer() {
  const restaurants = useFetchRestaurants();
  const categories = selectCategories(restaurants);

  const {
    filterText, setFilterText,
    setFilterCategory, filterRestaurants,
  } = useCategoryFilter({ restaurants });

  return (
    <div>
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filterRestaurants} />
    </div>
  );
}
