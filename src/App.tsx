// TODO: 메가테라 푸트코트 키오스크를 완성해주세요.
import { useEffect, useState } from 'react';
import Categories from './components/Categories/Categories';
import { getRestaurants } from './services/getRestaurants';
import Restaurants from './components/Restaurants/Restaurants';
import getCategories from './utils/getCategory';
import SearchBar from './components/SearchBar/SearchBar';

export default function App() {
  const [categories, setCagetories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [restaurants, setRestaurants] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const getRestaurantsData = async () => {
      const response = await getRestaurants();
      setRestaurants(response.restaurants);
      const categoriesData = getCategories(response.restaurants);
      setCagetories([...categoriesData]);
    };
    getRestaurantsData();
  }, []);

  useEffect(() => {
    // filterRestaurants();
  }, [searchKeyword, currentCategory]);
  return (
    <div>
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
