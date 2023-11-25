import { useEffect, useState } from 'react';
import { fetchGetRestaurants } from '../utils/apiService';
import { RestaurantList } from '../../types';
import { ApiError } from '../../api';

const useFetchResturant = () => {
  const [data, setData] = useState<RestaurantList>();
  const [error, setError] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetchGetRestaurants();

        setData(res.data);
      } catch (error: unknown) {
        const err = error as ApiError;

        setError(err.message);
      }
    };

    init();
  }, []);

  return { data, error };
};

export default useFetchResturant;
