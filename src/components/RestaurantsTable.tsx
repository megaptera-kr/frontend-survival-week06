import Restaurants from '../types/restaurant';
import RestaurantsTableBody from './RestaurantsTableBody';

type RestaurantsTableProps = {
  restaurants: Restaurants[];
}

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '10rem' }}>이름</th>
          <th style={{ width: '10rem' }}>종류</th>
          <th style={{ width: '15rem' }}>메뉴</th>
        </tr>
      </thead>
      <tbody>
        <RestaurantsTableBody restaurants={restaurants} />
      </tbody>
    </table>
  );
}
