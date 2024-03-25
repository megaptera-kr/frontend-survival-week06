import Restaurant from '../types/Restaurants';
import RestaurantRow from './RestaurantRow';

type RestaurantTable = {
  restaurants: Restaurant[]
}

function RestaurantTable({ restaurants }: RestaurantTable) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantRow key={restaurant.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantTable;
