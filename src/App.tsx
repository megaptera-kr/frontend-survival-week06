import Cart from './components/Cart';
import FilterableRestaurantsList from './components/FilterableRestaurantsList';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <Cart />
      <FilterableRestaurantsList restaurants={restaurants} />
      <h2>영수증</h2>
    </div>
  );
}
