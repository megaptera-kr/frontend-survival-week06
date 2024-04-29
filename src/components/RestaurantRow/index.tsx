import { Restaurant } from '../../types/restaurant';
import convertKRW from '../../utils/convertKRW/convertKRW';

type RestaurantRowProps = {
  restaurant:Restaurant
}

function RestaurantRow({ restaurant }:RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul style={{ listStyle: 'none' }}>
          {restaurant.menu.map((food) => (
            <li key={food.id}>
              <span>
                {food.name}
                (
                {convertKRW(food.price)}
                )
              </span>
              <button type="button">선택</button>
            </li>
          ))}

        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
