import { ChangeEvent, useState } from 'react';
import { useInterval, useLocalStorage } from 'usehooks-ts';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import ReceiptPrinter from './components/ReceiptPrinter';
import filterRestaurant from './utils/filterRestaurant';
import Menu from './types/Menu';
import Receipt from './types/Receipt';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);
  const [receipt, setReceipt] = useLocalStorage<Receipt | undefined>('receipt', undefined);

  const restaurants = useFetchRestaurants();
  const filteredRestaurants = filterRestaurant({ restaurants, filterText, filterCategory });

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  const handleChangeCategory = (name: string) => {
    setFilterCategory(name);
  };

  const handleAddCart = (menuItem: Menu) => {
    setCart([
      ...cart,
      menuItem,
    ]);
  };

  const handleDeleteCart = (index: number) => {
    const menus = cart.filter((_, i) => i !== index);
    setCart(menus);
  };

  useInterval(() => {
    setReceipt(undefined);
  }, receipt ? 5000 : null);

  console.log(receipt);

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <h2>🛒 점심 바구니</h2>
      <Cart
        cart={cart}
        setCart={setCart}
        setReceipt={setReceipt}
        onDeleteCart={handleDeleteCart}
      />
      <SearchBar
        filterText={filterText}
        onChange={handleChangeText}
        onClick={handleChangeCategory}
      />
      <FilterableRestaurantsTable
        restaurants={filteredRestaurants}
        onAddCart={handleAddCart}
      />
      <ReceiptPrinter
        receipt={receipt}
      />
    </>
  );
}
