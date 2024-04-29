import { useEffect, useState } from 'react';
import { Restaurant } from '../types/restaurant';

const BASE_URL = 'http://localhost:3000';

function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch(`${BASE_URL}/restaurants`);
      const data = await response.json();
      setRestaurants(data.restaurants);
    }

    getRestaurants();
  }, []);

  return { restaurants };
}

export default useFetchRestaurants;
