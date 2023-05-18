import { Restaurant } from '../types/restaurant';
import MenuItem from './MenuItem';

type Props = {
  restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant }:Props) {
  return (
    <tr>
      <td className="border-2 border-blue-500">{restaurant.name}</td>
      <td className="border-2 border-blue-500 px-2">{restaurant.category}</td>
      <td className="border-2 border-blue-500">
        <ul>
          {restaurant.menu.map((menu) => (
            <MenuItem
              key={menu.id}
              menu={menu}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}
