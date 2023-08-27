import { useLocalStorage } from 'usehooks-ts';

import { Menu } from '../types/restaurant';

export default function useBasketStorage() {
  const [basket, setBasket] = useLocalStorage<Menu[]>('basket', []);
  const totalPrice = basket.reduce((acc, cur) => acc + cur.price, 0);

  const addMenu = (menu: Menu) => {
    const newBasket = [...basket, menu];
    setBasket(newBasket);
  };

  const removeMenu = (menuIndex: number) => {
    const newBasket = basket.filter((_, index) => index !== menuIndex);
    setBasket(newBasket);
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return {
    basket,
    totalPrice,
    addMenu,
    removeMenu,
    clearBasket,
  };
}
