import RestaurantTableRow from './RestaurantTableRow';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import Restaurant from '../types/RestaurantType';

type RestaurantTableProps = {
  categoryName: string;
  restaurantName: string;
};

export default function RestaurantTable({
  categoryName,
  restaurantName,
}: RestaurantTableProps) {
  const { restaurants } = useFetchRestaurants({ categoryName, restaurantName });

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
