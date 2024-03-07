import { useEffect, useState } from 'react';

import RestaurantAPI from '../apis/restaurant.api';

import Restaurant from '../types/RestaurantType';

type useFetchRestaurantParamType = {
  categoryName: string;
  restaurantName: string;
};

type useFetchRestaurantsReturnType = {
  restaurants: Restaurant[];
};

function useFetchRestaurants({
  categoryName,
  restaurantName,
}: useFetchRestaurantParamType): useFetchRestaurantsReturnType {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const api = new RestaurantAPI();

  useEffect(() => {
    const fetchData = async () => {
      const data: Restaurant[] = await api.read({
        categoryName,
        restaurantName,
      });
      setRestaurants(data);
    };

    fetchData();
  }, [categoryName, restaurantName]);

  return { restaurants };
}

export default useFetchRestaurants;
