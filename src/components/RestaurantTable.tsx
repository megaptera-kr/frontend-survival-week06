import { Restaurant } from '../types';

import RestaurantRow from './RestaurantRow';

interface RestaurantTableProps {
  restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants }
  : RestaurantTableProps) {
  return (
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
          <RestaurantRow
            restaurant={restaurant}
            key={restaurant.id}
          />
        ))}
      </tbody>
    </table>
  );
}
