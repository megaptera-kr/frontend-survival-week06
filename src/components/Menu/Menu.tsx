import { MenuInterface } from '../Restaurants/Restaurants.interface';
import useCartStore from '../../hooks/useCartStore';

interface MenuProps {
  menues : MenuInterface[]
}

function Menu({ menues } : MenuProps) {
  const [{ cart }, store] = useCartStore();
  const handleAddCart = (menu : MenuInterface) => {
    store.addCart(menu);
  };
  return (
    <ul className="menues">
      {menues.map((menu) => (
        <li key={menu.id}>
          <button type="button" data-testid={`${menu.name}`} onClick={() => { handleAddCart(menu); }}>{menu.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
