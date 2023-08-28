import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import ReceiptPrinter from './components/ReceiptPrinter';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import FliterCategory from './components/FliterCategory';
import RestaurantTable from './components/RestaurantTable';
import useOrderStore from './hooks/useOrderStore';

export default function App() {
  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const restaurants = useFetchRestaurants();
  const [{ receipt }, store] = useOrderStore();

  useInterval(
    () => {
      if (receipt?.id) {
        store.setReceipt?.(null);
      }
    },
    receipt?.id ? 5000 : null,
  );
  return (
    <>
      <h1>메가테라 푸드코트 키오스크</h1>
      <Cart />
      <div>
        <div>
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
          <FliterCategory
            restaurants={restaurants}
            setCategory={setCategory}
          />
        </div>
        <RestaurantTable restaurants={restaurants} category={category} keyword={keyword} />
      </div>
      <ReceiptPrinter />
    </>
  );
}
