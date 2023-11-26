import RestaurantTableRow from './RestaurantTableRow';

import type Restaurant from '../types/Restaurant';

type RestaurantTableType = {
restaurants: Restaurant[]
}
export default function RestaurantTable({ restaurants }:RestaurantTableType) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            식당 이름
          </th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantTableRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}
