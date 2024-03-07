import MenuItem from './MenuItem';

import Food from '../types/FoodType';

type MenuProps = {
  menu: Food[];
};

export default function Menu({ menu }: MenuProps) {
  const handleClick = () => 0;

  return (
    <ul>
      {menu.map((menuItem: Food) => (
        <MenuItem key={menuItem.id} menuItem={menuItem}>
          <button
            style={{ marginLeft: '.5rem' }}
            type='button'
            name={`#${menuItem.name}`}
            onClick={handleClick}
          >
            선택
          </button>
        </MenuItem>
      ))}
    </ul>
  );
}
