import { MouseEvent } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { OrdersType } from '../../types/ordersType';
import { Restaurant } from '../../types/restaurant';
import convertKRW from '../../utils/convertKRW/convertKRW';
import { initOrders } from '../Orders';

type RestaurantRowProps = {
  restaurant:Restaurant
}

function RestaurantRow({ restaurant }:RestaurantRowProps) {
  const [, setOrders] = useLocalStorage<OrdersType>(
    'orders'
    , initOrders,
  );

  const addOrder = (event:MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    const [foodName, foodPrice] = name.split('.');

    setOrders((prev) => (
      {
        ...prev,
        menu: [...prev.menu, {
          id: Date.now().toString(),
          name: foodName,
          price: Number(foodPrice),
        }],
        totalPrice: prev.totalPrice + Number(foodPrice),
      }));
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
