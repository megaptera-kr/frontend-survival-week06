import Cart from './components/Cart';
import CategoryBar from './components/CategoryBar';
import Receipt from './components/Receipt';
import RestaurantList from './components/RestaurantList';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Cart />
      <SearchBar />
      <CategoryBar />
      <RestaurantList />
      <Receipt />
    </>
  );
}
