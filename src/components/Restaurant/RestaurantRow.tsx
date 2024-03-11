import RestaurantMenus from './RestaurantMenus';

import Restaurant from '../../types/Restaurant';

type RestaurantTableProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantTableProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td style={{ textAlign: 'center' }}>
        {name}
      </td>
      <td>
        {category}
      </td>
      <td>
        <RestaurantMenus menus={menu} />
      </td>
    </tr>
  );
}
