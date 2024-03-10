import MenuItem from '../Restaurant/MenuItem';

import Menu from '../../types/Menu';

import useCartStore from '../../hooks/useCartStore';

type MenusProps = {
  menus: Menu[];
};

export default function CartMenus({ menus }: MenusProps) {
  const [, store] = useCartStore();

  const removeMenu = (id: string) => {
    store.removeCart(id);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu}>
          <span style={{ margin: '0 auto' }}>
            {menu?.name}
            (
            {menu?.price.toLocaleString()}
            원)
          </span>
          <button
            name={`#${menu.name}`}
            type="button"
            style={{ marginLeft: '5px' }}
            onClick={() => removeMenu(menu?.id)}
          >
            X
          </button>
        </MenuItem>
      ))}
    </ul>
  );
}
