import useDispatch from '../hooks/useDispatch';
import { addItem } from '../stores/actions/cart.action';
import { Menu, Restaurants } from '../types/restaurants';
import MenuList from './MenuList';

type RestaurantRowProps = {
  restaurant: Restaurants
}

function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const dispatch = useDispatch();

  const handleClickBtn = (food: Menu) => {
    dispatch(addItem(food));
  };

  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul style={{ listStyle: 'none' }}>
          {restaurant.menu.map((food) => (
            <MenuList
              key={food.id}
              food={food}
              onClickBtn={handleClickBtn}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
