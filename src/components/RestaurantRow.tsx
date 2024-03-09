import Restaurant from '../types/Restaurant';
import Menu from './Menu';

type RestaurantRowProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { category, name, menu } = restaurant;
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
