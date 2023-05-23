import Restaurant from '../types/Restaurant';
import Menu from './Menu';

type RestaurantRowType = {
  restaurant: Restaurant
}

export default function RestaurantRow({ restaurant }: RestaurantRowType) {
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
