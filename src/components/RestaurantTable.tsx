import RestaurantTableRow from './RestaurantTableRow';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import Restaurant from '../types/RestaurantType';

type RestaurantTableProps = {
  restaurantName: string;
  categoryName: string;
};

export default function RestaurantTable({
  restaurantName,
  categoryName,
}: RestaurantTableProps) {
  const { restaurants } = useFetchRestaurants({ restaurantName, categoryName });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant: Restaurant) => (
            <RestaurantTableRow key={restaurant.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
