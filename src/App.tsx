import Cart from './components/Cart';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import ReceiptPrinter from './components/ReceiptPrinter';

export default function App() {
  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <Cart />
      <FilterableRestaurantsTable />
      <ReceiptPrinter />
    </div>
  );
}
