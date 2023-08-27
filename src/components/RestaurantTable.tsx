import type { Restaurants } from '../types/restaurants';
import RestaurantRow from './RestaurantRow';

type RestaurantsProps = {
  restaurants: Restaurants[]
}

function RestaurantTable({ restaurants }: RestaurantsProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantRow key={restaurant.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantTable;
