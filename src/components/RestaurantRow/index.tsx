import { MouseEvent } from 'react';
import useCartStore from '../../hooks/useCartStore';
import { Restaurant } from '../../types/restaurant';
import convertKRW from '../../utils/convertKRW/convertKRW';

type RestaurantRowProps = {
  restaurant:Restaurant
}

function RestaurantRow({ restaurant }:RestaurantRowProps) {
  const [, cartStores] = useCartStore();

  const addOrder = (event:MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    const [foodName, foodPrice] = name.split('.');
    const newMenu = {
      id: Date.now().toString(),
      name: foodName,
      price: Number(foodPrice),
    };

    cartStores.addCart(newMenu);
  };

  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((food) => (
            <li key={food.id}>
              <button
                type="button"
                name={`${food.name}.${food.price}`}
                onClick={addOrder}
              >
                {food.name}
                {convertKRW(food.price)}
              </button>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
