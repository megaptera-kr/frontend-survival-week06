import useCartStore from '../../hooks/useCartStore';
import { Restaurant } from '../../types/restaurant';
import MenuItem from '../common/MenuItem';

type Props = {
  restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant }:Props) {
  const [, store] = useCartStore();
  return (
    <tr>
      <td className="border-2 border-blue-500">{restaurant.name}</td>
      <td className="border-2 border-blue-500 px-2">{restaurant.category}</td>
      <td className="border-2 border-blue-500">
        <ul>
          {restaurant.menu.map((menu, index) => {
            const key = `${menu.id}-${index}`;
            return (
              <MenuItem
                key={key}
                index={index}
                name="선택"
                menu={menu}
                handleClick={() => store.addMenu(menu)}
              />
            );
          })}
        </ul>
      </td>
    </tr>
  );
}
