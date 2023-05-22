import Restaurant from '../types/Restaurants';
import Food from './Food';

type RestaurantRowProps = {
    restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { category, name, menu } = restaurant;

  const handleClickSelect = () => {
    console.log('선택');
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu.map((food) => (
            <Food key={food.id} food={food}>
              <button type="button" onClick={handleClickSelect}>선택</button>
            </Food>
          ))}
        </ul>
      </td>
    </tr>
  );
}
