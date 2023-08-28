// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import { useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

export default function useFetchRestaurants() {
  const [restaurantsData, setRestaurantsData] = useState([]);

  const fetchRestaurants = async () => {
    const url = 'http://localhost:3000/restaurants';
    const response = await window.fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { restaurants } = await response.json();

    setRestaurantsData(restaurants);
  };

  useEffectOnce(() => {
    fetchRestaurants();
  });

  return restaurantsData;
}
