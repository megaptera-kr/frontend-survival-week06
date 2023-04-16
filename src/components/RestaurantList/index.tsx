import { useEffect } from 'react';
import RestaurantItem from '../RestaurantItem';
import styles from './styles';
import useRestaurantStore from '../../hooks/useRestaurantStore';

export default function RestaurantList() {
  const [{ restaurants }, store] = useRestaurantStore();

  useEffect(() => {
    store.fetchRestaurant();
  }, []);

  return (
    <div>
      <ul style={styles.restaurantList}>
        <li style={{ ...styles.listTitle, ...styles.listItem }}>
          <span style={{ textAlign: 'center' }}>
            식당 이름
          </span>
          <span>종류</span>
          <span>메뉴</span>
        </li>
        {restaurants?.map((restaurant) => (
          <RestaurantItem key={restaurant.id} style={styles.listItem} restaurant={restaurant} />
        ))}
      </ul>
    </div>
  );
}
