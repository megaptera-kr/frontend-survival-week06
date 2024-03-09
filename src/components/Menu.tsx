import MenuItem from './MenuItem';
import useCartStore from '../hooks/useCartStore';

import Food from '../types/FoodType';

type MenuProps = {
  menu: Food[];
};

export default function Menu({ menu }: MenuProps) {
  const [, cartStore] = useCartStore();

  const handleClick = (item: Food) => {
    const { id, name, price } = item;
    cartStore.addItem({ id, name, price });
  };

  return (
    <ul>
      {menu.map((menuItem: Food) => (
        <MenuItem key={menuItem.id} menuItem={menuItem}>
          <button
            style={{ marginLeft: '.5rem' }}
            type='button'
            name={`#${menuItem.name}`}
            onClick={() => handleClick(menuItem)}
          >
            선택
          </button>
        </MenuItem>
      ))}
    </ul>
  );
}
