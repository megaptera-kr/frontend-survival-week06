import { Restaurant } from '../types';

import Menu from './Menu';

interface RestaurantProps {
    restaurant : Restaurant;
}
function RestaurantRow({ restaurant } : RestaurantProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Menu foods={restaurant.menu} />
      </td>
    </tr>
  );
}

export default RestaurantRow;
