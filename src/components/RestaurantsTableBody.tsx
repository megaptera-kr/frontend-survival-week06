import MenuList from './MenuList';

import { Restaurant } from '../types/restaurant';

type RestaurantsTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantsTableBody({
  restaurants,
}: RestaurantsTableProps) {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            <MenuList menuList={restaurant.menu} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
