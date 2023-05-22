import Restaurant from '../types/Restaurants';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
    restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <th>
          식당 이름
        </th>
        <th>
          종류
        </th>
        <th>
          메뉴
        </th>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
