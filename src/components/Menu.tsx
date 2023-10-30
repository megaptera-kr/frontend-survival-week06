import Food from '../Types/Food';
import MenuItem from './MenuItem';
import useCartStore from '../hooks/useCartStore';

type MenuProps = {
  menu: Food[];
}

export default function Menu({ menu }:MenuProps) {
  const [, store] = useCartStore();

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  const handleClickSelect = (food: Food) => {
    store.addMenu(food);
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
            onClickItem={handleClickSelect}
          />
        );
      })}
    </ul>
  );
}
