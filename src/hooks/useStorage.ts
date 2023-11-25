import { useLocalStorage } from 'usehooks-ts';
import { Menu, Receipt } from '../../types';

export const storageKey = {
  cart: 'cart',
  receipt: 'receipt',
} as const;

const useStorage = <T>(key: keyof typeof storageKey, defaultValue: T) => {
  const [data, setData] = useLocalStorage<T>(key, defaultValue);

  return { data, setData };
};

export const useCartStorage = () => {
  const { data, setData } = useStorage<Menu[]>(storageKey.cart, []);

  const handleAddCart = ({ menuItem }: { menuItem: Menu }) => {
    setData((prev) => [...prev, menuItem]);
  };

  const handleRemoveCart = ({ menuIndex }: { menuIndex: number }) => {
    setData((prev) => prev.filter((row, index) => index !== menuIndex));
  };

  return {
    cart: data,
    setCart: setData,
    handleAddCart,
    handleRemoveCart,
  };
};

export const useReceiptStorage = () => {
  const receiptStorage = useStorage<Receipt | null>(storageKey.receipt, null);

  return { receipt: receiptStorage.data, setReceipt: receiptStorage.setData };
};

export default useStorage;
