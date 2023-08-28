import { useLocalStorage } from 'usehooks-ts';

import { Receipt } from '../types/receipt';

export default function useReceipt() {
  const [receipt, setReceipt] = useLocalStorage<Receipt | void>('receipt', undefined);

  const addReceipt = (newReceipt: Receipt) => {
    setReceipt(newReceipt);
  };

  const clearReceipt = () => {
    setReceipt();
  };

  return {
    receipt,
    addReceipt,
    clearReceipt,
  };
}
