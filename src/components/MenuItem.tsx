import useStore from '../hooks/useStore';

import Food from '../types/Food';

type MenuItemProps = {
    food: Food
}
export default function MenuItem({ food }:MenuItemProps) {
  const store = useStore();
  const handleClickMenu = (selectFood: Food) => {
    store.addMenu(selectFood);
  };
  return (
    <li key={food.id}>
      <button type="button" onClick={() => handleClickMenu(food)}>
        {food.name}
        {food.price.toLocaleString()}
        원
      </button>
    </li>
  );
}
