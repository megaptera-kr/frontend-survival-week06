import Food from '../types/Food';

import MenuItem from './MenuItem';

type MenuProps = {
    menu: Food[]
}

export default function Menu({ menu }:MenuProps) {
  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다.</p>
    );
  }
  return (
    <ul>
      {menu.map((food) => (
        <MenuItem
          key={food.id}
          food={food}
        />
      ))}
    </ul>
  );
}
