import { useFetch, useLocalStorage } from 'usehooks-ts';
import type Receipt from '../types/Receipt';

const url = 'http://localhost:3000/orders';

// eslint-disable-next-line consistent-return
export default function useFetchRestaurants() {
  const [receiptId] = useLocalStorage('receipt', '');
  const { data } = useFetch<{order: Receipt}>(`${url}/${receiptId}`);

  if (receiptId && data) {
    return data.order;
  }
}
