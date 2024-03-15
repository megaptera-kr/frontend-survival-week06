import useUUID from '../hooks/useUUID';
import Food from '../types/Food';
import MenuItem from './MenuItem';
import useCartStore from '../hooks/useCartStore';

type MenuProps = {
  menu: Food[]
}

function Menu({ menu }: MenuProps) {
  const [, store] = useCartStore();

  const handleClickSelect = (food: Food) => {
    store.addMenu(food);
  };

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  return (
    <ul>
      {menu.map((food) => {
        const MenuItemKey = useUUID(`${food.id}`);

        return (
          <MenuItem
            key={MenuItemKey}
            food={food}
            handleClickSelect={handleClickSelect}
          />
        );
      })}
    </ul>
  );
}

export default Menu;
