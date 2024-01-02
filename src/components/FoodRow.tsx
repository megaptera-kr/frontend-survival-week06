import useCartStore from '../hooks/useCartStore';
import Food from '../types/Food';

type FoodRowProps = {
    food: Food
}

export default function FoodRow({ food }:FoodRowProps) {
  const [, store] = useCartStore();

  const handleClick = () => {
    store.addMenu(food);
  };
  return (
    <ul>
      <li style={{ display: 'flex' }}>
        <button
          style={{ marginLeft: '1rem' }}
          type="button"
          onClick={handleClick}
        >
          <span style={{ margin: '0px auto' }}>
            {food.name}
            (
            {food.price}
            원)
          </span>
        </button>
      </li>
    </ul>
  );
}
