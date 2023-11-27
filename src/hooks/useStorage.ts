import { useLocalStorage } from 'usehooks-ts';
import { Receipt } from '../../types';

export const storageKey = {
  cart: 'cart',
  receipt: 'receipt',
} as const;

const useStorage = <T>(key: keyof typeof storageKey, defaultValue: T) => {
  const [data, setData] = useLocalStorage<T>(key, defaultValue);

  return { data, setData };
};

export const useReceiptStorage = () => {
  const receiptStorage = useStorage<Receipt | null>(storageKey.receipt, null);

  return { receipt: receiptStorage.data, setReceipt: receiptStorage.setData };
};

export default useStorage;
