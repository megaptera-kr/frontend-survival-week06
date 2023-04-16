import { CSSProperties } from 'react';
import { Menu, Restaurant } from '../../types/restaurant';
import toLocaleCurrency from '../../utils/format';
import styles from './styles';
import useOrderStore from '../../hooks/useOrderStore';

type RestaurantItemProps = {
  restaurant: Restaurant
  style: CSSProperties | undefined
}
export default function RestaurantItem({ style, restaurant }: RestaurantItemProps) {
  const [{ cart }, store] = useOrderStore();

  const handleClickMenu = (menu: Menu) => () => {
    store.setCart?.([...cart, menu]);
  };

  return (
    <li style={style}>
      <span>{restaurant.name}</span>
      <span>{restaurant.category}</span>
      <span>
        <ul style={styles.menuWrapper}>
          {restaurant.menu?.map((menu: Menu) => (
            <li key={menu.id} style={styles.menu}>
              <span style={styles.menuName}>
                {menu.name}
                {' '}
                (
                {toLocaleCurrency(menu.price)}
                원)
              </span>
              <button type="button" name={`#${menu.name}`} onClick={handleClickMenu(menu)}>선택</button>
            </li>
          ))}
        </ul>
      </span>
    </li>
  );
}
