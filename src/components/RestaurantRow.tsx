import Restaurant from '../types/Restaurants';
import Menu from './Menu';

type RestaurantRowProps = {
  restaurant: Restaurant
}

function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td><Menu menu={menu} /></td>
    </tr>
  );
}

export default RestaurantRow;
