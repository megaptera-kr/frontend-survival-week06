import RestaurantsFilter from '../restaurantsFilter/RestaurnatsFilter';
import RestaurantsTable from '../restaurantsTable/RestaurantsTable';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';
import useRestaurantsFilter from '../../hooks/useRestaurantsFilter';
import { getCategories, filterRestaurants } from '../../utils/restaurants';

export default function FilterableRestaurants() {
  const { restaurants } = useFetchRestaurants();
  const { filter, handleChangeFilter } = useRestaurantsFilter();
  const categories = getCategories(restaurants);
  const filterdRestaurants = filterRestaurants(restaurants, filter);

  return (
    <article>
      <h2>식당 메뉴표</h2>
      <RestaurantsFilter
        categories={categories}
        filter={filter}
        onChangeFilter={handleChangeFilter}
      />
      <RestaurantsTable restaurants={filterdRestaurants} />
    </article>
  );
}
