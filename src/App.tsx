import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart />
      <FilterableRestaurantTable restaurants={restaurants} />
    </div>
  );
}
