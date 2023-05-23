import { ChangeEventHandler } from 'react';
import styles from './styles';
import useRestaurantStore from '../../hooks/useRestaurantStore';

export default function SearchBar() {
  const [{ searchParams }, store] = useRestaurantStore();

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    store.searchRestaurants?.({
      name: e.target.value,
      category: searchParams.category,
    });
  };

  return (
    <div style={styles.searchBar}>
      <label htmlFor="search" style={styles.searchLabel}>
        검색
      </label>
      <input id="search" type="text" placeholder="식당 이름" value={searchParams.name} onChange={handleSearch} />
    </div>
  );
}
