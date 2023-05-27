import { Restaurant } from '../types';
import MenuRow from './MenuRow';

interface RestaurantProps {
    restaurant : Restaurant;
}
function RestaurantRow({ restaurant } : RestaurantProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((food) => (
            <MenuRow food={food} key={food.id} />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
