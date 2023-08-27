import { useEffect } from 'react';

import { useBoolean, useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';

import useFetchRestaurants from './hooks/useFetchRestaurants';

import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const { value, setTrue, setFalse } = useBoolean(false);

  const [receipt, setReceipt] = useLocalStorage('receipt', emptyReceipt);

  const restaurants = useFetchRestaurants();

  useEffect(() => {
    setFalse();

    if (receipt.id) {
      setTrue();
    }
  }, [receipt]);

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
      setFalse();
    }
  }, value ? 5000 : null);

  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <FilterableRestaurantTable restaurants={restaurants} />
      <Cart setReceipt={setReceipt} />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
