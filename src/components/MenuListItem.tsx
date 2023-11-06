import Menu from '../types/Menu';
import useCartStore from '../hooks/useCartStore';

type MenuListItemProps = {
  menu: Menu
}

export default function MenuListItem({ menu }: MenuListItemProps) {
  const [, store] = useCartStore();

  const handleClickMenuButton = (menuItem: Menu) => {
    store.addCart(menuItem);
  };

  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '0.5rem',
      }}
    >
      <button
        name={`#${menu.name}`}
        type="button"
        style={{
          marginLeft: '0.5rem',
        }}
        onClick={() => {
          handleClickMenuButton(menu);
        }}
      >
        <span
          style={{
            margin: '0px auto',
          }}
        >
          {menu.name}
          (
          {menu.price.toLocaleString('ko-kr')}
          원)
        </span>
      </button>
    </li>
  );
}
