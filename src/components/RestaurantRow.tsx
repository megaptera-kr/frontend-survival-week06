import Restaurants from '../types/Restaurants';
import Menu from './Menu';

type RestaurantRow = {
    restaurant: Restaurants
}

export default function RestaurantRow({ restaurant }:RestaurantRow) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>
        <ul>
          <Menu menu={restaurant.menu} />
        </ul>
      </td>
    </tr>
  );
}
