import { useLocalStorage } from 'usehooks-ts';
import MenuItem from './MenuItem';
import type Food from '../types/Food';

export default function Menu({ menu }: {menu: Food[]}) {
  const [selectMenu, setSelectMenu] = useLocalStorage<Food[]>('cart', []);

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  const handleClickSelect = (food: Food) => {
    setSelectMenu([
      ...selectMenu,
      food,
    ]);
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
            onClick={() => handleClickSelect(food)}
          />
        );
      })}
    </ul>
  );
}
