import useCartStore from '../hooks/useCartStore';
import Food from '../types/Food';
import Restaurant from '../types/Restaurants';
import Menu from './Menu';

type RestaurantRowProps = {
    restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { category, name, menu } = restaurant;
  const [, store] = useCartStore();

  const handleClickSelect = (food: Food) => {
    store.addMenu(food);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu.map((food) => (
            <Menu key={food.id} food={food}>
              <button
                type="button"
                onClick={() => handleClickSelect(food)}
              >
                선택
              </button>
            </Menu>
          ))}
        </ul>
      </td>
    </tr>
  );
}
