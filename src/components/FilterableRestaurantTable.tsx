import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

type FilterableRestaurantTableType = {
  restaurants: Restaurant[]
};

export default function FilterableRestaurantTable(
  { restaurants } : FilterableRestaurantTableType,
) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>식당이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
