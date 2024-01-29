import RestaurantRow from './RestaurantRow';

import Restaurants from '../types/Restaurants';

type RestaurantTableProps = {
    restaurants: Restaurants[]
}
export default function RestaurantTable({ restaurants }:RestaurantTableProps) {
  return (
    <table>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
