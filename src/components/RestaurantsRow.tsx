import Restaurants from '../types/Restaurants';
import MenuItem from './MenuItem';
import Menu from '../types/Menu';

interface RestaurantsRowProps {
  restaurants: Restaurants[];
  onAddCart: (menuItem: Menu) => void;
}

export default function RestaurantsRow({
  restaurants,
  onAddCart,
}: RestaurantsRowProps) {
  return (
    <tbody style={{ textAlign: 'center' }}>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            {restaurant.menu.map((menuItem) => (
              <MenuItem
                key={menuItem.id}
                menuItem={menuItem}
                onAddCart={onAddCart}
              />
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
