import Restaurant from '../type/Restaurant';
import Menu from './Menu';

type RestaurantRowProps = {
  restaurant : Restaurant,
}

export default function RestaurantRow({ restaurant }:RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        {
          (restaurant.menu).map((menu) => (
            <Menu menu={menu} key={menu.id} />
          ))
        }
      </td>
    </tr>
  );
}
