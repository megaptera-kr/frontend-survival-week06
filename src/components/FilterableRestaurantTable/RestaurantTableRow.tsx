import { Restaurant } from '../../types/Restaurant';
import Menu from './Menu';

interface RestaurantTableRowProps {
  restaurant: Restaurant;
}

export default function RestaurantTableRow({
  restaurant,
}: RestaurantTableRowProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Menu menu={restaurant.menu} />
      </td>
    </tr>
  );
}
