import RestaurantType from '../types/RestaurantType';
import Restaurant from './Restaurant';

export default function RestaurantTable({ restaurants, category, keyword }: any) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '32px' }}>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants
            .filter((restaurant: RestaurantType) => {
              const isIncludedCategory = restaurant.category.includes(category);
              const isIncludedName = restaurant.name.includes(
                keyword.trim(),
              );
              return isIncludedCategory && isIncludedName;
            })
            .map((restaurant: RestaurantType, index: number) => (
              <Restaurant
                key={`restaurant${restaurant.id + index}`}
                restaurant={restaurant}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
