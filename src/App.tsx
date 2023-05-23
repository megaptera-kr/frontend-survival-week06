import RestaurantTable from './components/RestaurantTable';
import CartItem from './components/CartItem';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import Cart from './components/Cart';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <p>푸드코트 키오스크</p>

      <FilterableRestaurantTable restaurants={restaurants} />
      <Cart />

    </div>
  );
}
