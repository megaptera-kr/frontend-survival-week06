import CATEGORIES from '../../constants/app';
import { Category } from '../../types/restaurant';
import styles from './styles';
import useRestaurantStore from '../../hooks/useRestaurantStore';

export default function CategoryBar() {
  const [{ searchParams }, store] = useRestaurantStore();

  const handleSearch = (category: Category) => () => {
    store.searchRestaurants?.({
      name: searchParams.name,
      category,
    });
  };

  return (
    <ul style={styles.categoryList}>
      {CATEGORIES.map((category) => (
        <li key={category} style={styles.categoryItem}>
          <button type="button" value={category} onClick={handleSearch(category as Category)}>{category}</button>
        </li>
      ))}
    </ul>
  );
}
