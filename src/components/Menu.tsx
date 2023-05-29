import useCartStore from '../hooks/useCartStore';

import { Food } from '../types';
import MenuButton from './MenuItem';

interface MenuRowProps {
    foods: Food[];
}

export default function MenuRow({ foods } : MenuRowProps) {
  const [, store] = useCartStore();

  const handleClickSelect = (food: Food) => {
    store.addCartItem(food);
  };

  return (
    <ul>
      {foods.map((food) => (
        <MenuButton
          key={food.id}
          food={food}
          handleClickSelect={handleClickSelect}
        />
      ))}
    </ul>
  );
}
