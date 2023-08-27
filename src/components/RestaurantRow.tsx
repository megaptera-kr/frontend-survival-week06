import { Restaurants } from '../types/restaurants';
import Menu from './Menu';

type RestaurantRowProps = {
  restaurant: Restaurants
}

function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul style={{ listStyle: 'none' }}>
          {restaurant.menu.map((food) => <Menu key={food.id} food={food} />)}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
