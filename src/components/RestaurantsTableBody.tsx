import Restaurant from '../types/restaurant';
import RestaurantsTableBodyFood from './RestaurantsTableBodyFood';

type RestaurantsTableBody = {
  restaurants: Restaurant[];
}

export default function RestaurantsTableBody({ restaurants }: RestaurantsTableBody) {
  return (
    <>
      {restaurants.map((restaurant: Restaurant, index: number) => (
      // eslint-disable-next-line react/no-array-index-key
        <tr key={`${restaurant.id}-${index}`}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            <RestaurantsTableBodyFood menu={restaurant.menu} />
          </td>
        </tr>
      ))}
    </>
  );
}
