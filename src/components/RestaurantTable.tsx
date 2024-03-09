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
        {!restaurants.length ? (
          <tr>
            <td colSpan={3}>일치하는 식당 목록이 없습니다.</td>
          </tr>
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantRow key={restaurant.name} restaurant={restaurant} />
          ))
        )}
      </tbody>
    </table>
  );
}
