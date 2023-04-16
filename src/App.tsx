import FilterableRestaurants from './components/filterableRestaurants/FilterableRestaurants';
import Cart from './components/cart/Cart';

export default function App() {
  return (
    <main>
      <h1>Kiosk week 6</h1>
      <section style={{ display: 'flex' }}>
        <FilterableRestaurants />
        <Cart />
      </section>
    </main>
  );
}
