import { useEffect, useState } from 'react';

import RestaurantAPI from '../apis/restaurant.api';

import Restaurant from '../types/RestaurantType';

type useFetchRestaurantParamType = {
  restaurantName: string;
  categoryName: string;
};

type useFetchRestaurantsReturnType = {
  restaurants: Restaurant[];
};

function useFetchRestaurants({
  restaurantName,
  categoryName,
}: useFetchRestaurantParamType): useFetchRestaurantsReturnType {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const api = new RestaurantAPI();

  useEffect(() => {
    const fetchData = async () => {
      const data: Restaurant[] = await api.read({
        restaurantName,
        categoryName,
      });
      setRestaurants(data);
    };

    fetchData();
  }, []);

  return { restaurants };
}

export default useFetchRestaurants;
