import { MouseEvent } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { OrdersType } from '../../types/ordersType';
import { Restaurant } from '../../types/restaurant';
import convertKRW from '../../utils/convertKRW/convertKRW';

type RestaurantRowProps = {
  restaurant:Restaurant
}

function RestaurantRow({ restaurant }:RestaurantRowProps) {
  const [, setOrders] = useLocalStorage<OrdersType>(
    'orders'
    , { menu: [], totalPrice: 0 },
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
        <ul style={{ listStyle: 'none' }}>
          {restaurant.menu.map((food) => (
            <li key={food.id}>
              <span>
                {food.name}
                (
                {convertKRW(food.price)}
                )
              </span>
              <button
                type="button"
                name={`${food.name}.${food.price}`}
                onClick={addOrder}
              >
                선택
              </button>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
