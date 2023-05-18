import useRestaurantsStore from '../hooks/useRestaurantsStore';

import RestaurantRow from './RestaurantRow';

export default function RestaurantTable() {
  const [{ restaurants }, store] = useRestaurantsStore();

  const filteredRestaurants = store.filterRestaurants(restaurants);

  return (
    <table className="table-auto border-collapse w-full text-center mt-8">
      <thead>
        <tr>
          <th className="border-2 border-blue-500">식당 이름</th>
          <th className="border-2 border-blue-500">종류</th>
          <th className="border-2 border-blue-500">메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}
