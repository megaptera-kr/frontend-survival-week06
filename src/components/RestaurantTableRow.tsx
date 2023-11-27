import Menu from './Menu';
import type Restaurant from '../types/Restaurant';

export default function RestaurantTableRow({ restaurant }: {restaurant:Restaurant}) {
  const { name, category, menu } = restaurant;
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
