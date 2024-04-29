import { useBoolean } from 'usehooks-ts';
import { FilterableRestaurants, Orders, Receipt } from './components';

// TODO: 메가테라 푸트코트 키오스크를 완성해주세요.
export default function App() {
  const {
    value: receiptState,
    setTrue: showReceipt,
    setFalse: hideReceipt,
  } = useBoolean(false);
  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <Orders />
      <FilterableRestaurants />
      <Receipt />
    </div>
  );
}
