// TODO: 메가테라 푸트코트 키오스크를 완성해주세요.
import { useEffect, useRef, useState } from 'react';
import { RestaurantsInterface } from './components/Restaurants/Restaurants.interface';
import { getRestaurants } from './services/getRestaurants';
import getCategories from './utils/getCategory';
import Categories from './components/Categories/Categories';
import Cart from './components/Cart/Cart';
import SearchBar from './components/SearchBar/SearchBar';
import Restaurants from './components/Restaurants/Restaurants';

export default function App() {
  const [categories, setCagetories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [restaurants, setRestaurants] = useState<RestaurantsInterface[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const baseRestaurants = useRef<RestaurantsInterface[]>();

  const filteredRestaurants = (baseList : RestaurantsInterface[]) => {
    const filteredList = baseList.filter(
      (restaurant) => restaurant?.name.includes(searchKeyword.trim()),
    );

    if (currentCategory === '전체') {
      setRestaurants([...filteredList]);
    }

    if (currentCategory !== '전체') {
      const categoryFilteredList = filteredList.filter(
        (restaurant) => restaurant?.category === currentCategory,
      );
      setRestaurants([...categoryFilteredList]);
    }
  };

  useEffect(() => {
    const getRestaurantsData = async () => {
      const response = await getRestaurants();
      setRestaurants(response.restaurants);
      const categoriesData = getCategories(response.restaurants);
      setCagetories([...categoriesData]);
      if (response.restaurants) {
        baseRestaurants.current = [...response.restaurants];
      }
    };
    getRestaurantsData();
  }, []);

  useEffect(() => {
    if (baseRestaurants.current && (searchKeyword || currentCategory)) {
      filteredRestaurants(baseRestaurants.current);
    }
  }, [searchKeyword, currentCategory]);

  return (
    <div>
      <Cart />
      <SearchBar handleSetSearchKeyword={setSearchKeyword} />
      <h1>메가테라 푸드코트 키오스크</h1>
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        handleSetCurrentCategory={setCurrentCategory}
      />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
