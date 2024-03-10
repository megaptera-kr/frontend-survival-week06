import CartContainer from './components/Cart/CartContainer';
import RestaurantContainer from './components/Restaurant/RestaurantContainer';

export default function App() {
  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <CartContainer />
      <RestaurantContainer />
    </div>
  );
}
