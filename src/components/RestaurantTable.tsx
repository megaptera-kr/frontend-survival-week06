import RestaurantRow from './RestaurantRow';

import Restaurant from '../types/Restaurant';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
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
        {restaurants.map((restaurant) => (
          <RestaurantRow key={restaurant.name} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
