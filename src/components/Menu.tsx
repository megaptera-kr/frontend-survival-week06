import useCartStore from '../hooks/useCartStore';
import Food from '../types/Food';

type MenuType = {
  menu: Food[]
}

export default function Menu({ menu } : MenuType) {
  const [, store] = useCartStore();

  return (
    <ul>
      {menu.map((food) => (
        <li key={food.id}>
          {food.name}
          <button
            type="button"
            onClick={() => {
              store.addCartItem(food);
            }}
          >
            선택
          </button>
        </li>
      ))}
    </ul>
  );
}
