import { useInterval } from 'usehooks-ts';

import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import Basket from './components/Basket';
import Receipt from './components/Receipt';

import useFetchRestaurants from './hooks/useFetchRestaurants';
import useReceipt from './hooks/useReceipt';

export default function App() {
  const { receipt, clearReceipt, addReceipt } = useReceipt();
  const restaurants = useFetchRestaurants();

  useInterval(() => {
    clearReceipt();
  }, receipt ? 5_000 : null);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div>
        <h1>메가테라 푸드코트 키오스크</h1>
        <Basket addReceipt={addReceipt} />
        <FilterableRestaurantsTable restaurants={restaurants} />
      </div>
      <Receipt receipt={receipt} />
    </div>
  );
}
