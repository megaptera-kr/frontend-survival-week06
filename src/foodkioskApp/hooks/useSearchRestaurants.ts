import { ChangeEvent, useCallback } from 'react';

import useDispatch from './useDispatch';

export default function useSearchRestaurants() {
  const dispatch = useDispatch();

  const handleSearchQuery = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      dispatch({
        type: 'search',
        payload: value,
      });
    },
    [dispatch],
  );

  return {
    handleSearchQuery,
  };
}
