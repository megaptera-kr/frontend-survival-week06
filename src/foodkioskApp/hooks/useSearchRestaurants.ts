import { ChangeEvent, useCallback } from 'react';

import useSelector from './useSelector';

import useDispatch from './useDispatch';

export default function useSearchRestaurants() {
  const query = useSelector((state) => state.query);

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
    query,
    handleSearchQuery,
  };
}
