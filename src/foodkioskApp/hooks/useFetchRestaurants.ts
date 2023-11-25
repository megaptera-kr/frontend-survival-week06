import { useEffect } from 'react';

import { useFetch } from 'usehooks-ts';

import useDispatch from './useDispatch';

import { RestaurantsItem } from '../types';

import { getRataurantsURL } from '../../api';

export default function useFetchRestaurants() {
  const dispatch = useDispatch();
  const { data } = useFetch<RestaurantsItem>(getRataurantsURL);

  useEffect(() => {
    if (data?.restaurants) {
      dispatch({ type: 'fetchDataReducer', payload: data.restaurants });
    }
  }, [data]);
}
