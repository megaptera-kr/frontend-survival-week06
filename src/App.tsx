// TODO: 메가테라 푸트코트 키오스크를 완성해주세요.
import { useEffect, useState } from 'react';
import Categories from './components/Categories/Categories';
import { getRestaurants } from './services/getRestaurants';

export default function App() {
    const [categories, setCagetories] = useState();
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        getRestaurants().then(res => setRestaurants([...res.restaurants]));

    }, []);
  return (
    <div>
      <h1>메가테라 푸드코트 키오스크</h1>
      <Categories categories={categories} />
    </div>
  );
}
