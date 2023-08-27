import RestaurantsTableBody from './RestaurantsTableBody';

import { Restaurant } from '../types/restaurant';

type RestaurantsTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantsTable({
  restaurants,
}: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th
            style={{
              paddingInline: '2em',
            }}
          >
            식당 이름
          </th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <RestaurantsTableBody restaurants={restaurants} />
    </table>
  );
}
