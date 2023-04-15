import { useEffect, useState } from 'react';

export default function useFetchRestaurants() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'http://localhost:3000/restaurants';
      const data = await fetch(url);
      const { restaurants } = await data.json();
      setRestaurant(restaurants);
    }
    fetchData();
  }, []);

  return restaurant;
}
