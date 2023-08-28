import useCartStore from '../hooks/useCartStore';

import Food from '../types/Food';

import MenuItem from './MenuItem';

type MenuProps = {
    menu: Food[];
}

export default function Menu({ menu }:MenuProps) {
  const store = useCartStore();

  const handleClickSelect = (food:Food) => {
    store.selectCart(food);
    store.update();
  };

  return (
    <ul>
      {menu.map((food, idx) => {
        const key = `${food.id}-${idx}`;
        return (
          <MenuItem
            food={food}
            key={key}
            onClick={handleClickSelect}
          />

        );
      })}
    </ul>
  );
}
