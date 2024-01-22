import { useEffect, useState } from 'react';

import axios from 'axios';

import Restaurants from '../types/Restaurants';

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurants[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await axios(url);
      if (response) {
        setRestaurants(response.data.restaurants);
      }
    };
    fetchData();
  }, []);
  return [restaurants];
};

export default useFetchRestaurants;
