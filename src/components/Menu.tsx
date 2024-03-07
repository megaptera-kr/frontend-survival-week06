import MenuItem from './MenuItem';

import Food from '../types/FoodType';

type MenuProps = {
  menu: Food[];
};

export default function Menu({ menu }: MenuProps) {
  return (
    <ul>
      {menu.map((menuItem: Food) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </ul>
  );
}
