import Restaurant from '../types/Restaurant';
import FoodRow from './FoodRow';

type RestaurantRowProps ={
    restaurant: Restaurant
}

export default function RestaurantRow({ restaurant }:RestaurantRowProps) {
  return (
    <tr>
      <td style={{ textAlign: 'center' }}>
        {restaurant.name}
      </td>
      <td>
        {restaurant.category}
      </td>
      <td>
        {restaurant.menu.map((food) => (
          <FoodRow
            key={food.id}
            food={food}
          />
        ))}
      </td>
    </tr>
  );
}
