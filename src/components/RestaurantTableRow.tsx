import Menu from './Menu';

import Restaurant from '../types/RestaurantType';

type RestaurantTableRowProps = {
  restaurant: Restaurant;
};

export default function RestaurantTableRow({
  restaurant,
}: RestaurantTableRowProps) {
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
