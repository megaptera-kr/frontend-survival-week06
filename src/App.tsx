import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import Cart from './components/Cart';
import FilteredRestaurantTable from './components/FilteredRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';

import useGetRestaurant from './hooks/useGetRestaurant';
import useGetReceipt from './hooks/useGetReceipt';

export default function App() {
  const { value, setTrue, setFalse } = useBoolean(false);
  const [receiptId, setReceiptId] = useLocalStorage('receipt', '');
  const restaurants = useGetRestaurant();
  const receipt = useGetReceipt();

  useEffect(() => {
    setFalse();

    if (receiptId) {
      setTrue();
    }
  }, [receiptId]);

  useInterval(() => {
    if (receiptId) {
      setReceiptId('');
      setFalse();
    }
  }, value ? 5000 : null);

  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <Cart setReceiptId={setReceiptId} />
      <FilteredRestaurantTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
