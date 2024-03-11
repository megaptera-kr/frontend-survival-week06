import MenuItem from './MenuItem';

import Menu from '../../types/Menu';

import useCartStore from '../../hooks/useCartStore';

type MenusProps = {
  menus: Menu[];
};

export default function RestaurantMenus({ menus }: MenusProps) {
  const [, store] = useCartStore();
  const handleSelectMenu = (menu: Menu) => {
    store.addCart(menu);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu}>
          <button
            type="button"
            style={{ margin: '0 auto' }}
            onClick={() => handleSelectMenu(menu)}
          >
            {menu?.name}
            (
            {menu?.price?.toLocaleString()}
            원)
          </button>
        </MenuItem>
      ))}
    </ul>
  );
}
