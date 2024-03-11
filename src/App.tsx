import { useInterval } from 'usehooks-ts';

import KioskTitle from './components/KioskTitle';
import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';

import useReceiptStore from './hooks/useReceiptStore';

export default function App() {
  const [snapshot, receiptStore] = useReceiptStore();
  const { item: receipt } = snapshot;

  useInterval(
    () => {
      if (receipt.id) {
        receiptStore.clear();
      }
    },
    receipt.id ? 5000 : null,
  );

  return (
    <div>
      <KioskTitle title='푸드코트 키오스크' />
      <Cart />
      <FilterableRestaurantTable />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
