import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantsTableProps ={
    restaurants: Restaurant[]
}

export default function RestaurantsTable({ restaurants }:RestaurantsTableProps) {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <RestaurantRow
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </tbody>
  );
}
