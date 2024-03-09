import KioskTitle from './components/KioskTitle';
import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';

import useReceiptStore from './hooks/useReceiptStore';

export default function App() {
  const [snapshot] = useReceiptStore();
  const { item } = snapshot;

  return (
    <div>
      <KioskTitle title='푸드코트 키오스크' />
      <Cart />
      <FilterableRestaurantTable />
      <ReceiptPrinter receipt={item} />
    </div>
  );
}
