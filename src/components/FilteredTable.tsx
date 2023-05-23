import useFetchRestaurants from '../hooks/useFetchRestaurants';
import filterRestaurants from '../utils/filterRestaurants';
import RestaurantRow from './RestaurantRow';

export default function FilteredTable() {
  const restaurants = useFetchRestaurants();
  const filteredRestaurants = filterRestaurants({ restaurants });
  return (
    <table>
      <thead>
        <tr>
          <th>식당이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {
          filteredRestaurants.map((restaurant) => (
            <RestaurantRow key={restaurant.id} restaurant={restaurant} />
          ))
        }
      </tbody>
    </table>
  );
}
