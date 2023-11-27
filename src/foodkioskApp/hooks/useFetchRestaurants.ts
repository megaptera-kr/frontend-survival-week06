import { useEffect } from 'react';

import { useFetch } from 'usehooks-ts';

import useDispatch from './useDispatch';

import { Restaurants } from '../types';

import { getRataurantsURL } from '../../api';

export default function useFetchRestaurants() {
  const dispatch = useDispatch();

  const { data } = useFetch<Restaurants>(getRataurantsURL);

  useEffect(() => {
    if (data?.restaurants) {
      dispatch({ type: 'fetchData', payload: data.restaurants });
    }
  }, [data, dispatch]);
}
