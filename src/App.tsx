import CartContainer from './components/cart/CartContainer';
import Layout from './components/common/Layout';
import FilterableRestaurants from './components/restaurant/FilterableRestaurants';

export default function App() {
  return (
    <Layout>
      <FilterableRestaurants />
      <CartContainer />
    </Layout>
  );
}
