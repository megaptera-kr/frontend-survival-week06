import KioskTitle from './components/KioskTitle';
import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';

export default function App() {
  return (
    <div>
      <KioskTitle title='푸드코트 키오스크' />
      <Cart />
      <FilterableRestaurantTable />
      <ReceiptPrinter />
    </div>
  );
}
