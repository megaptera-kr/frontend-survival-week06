import React, { useCallback } from 'react';

import useSelector from './useSelector';

import useDispatch from './useDispatch';

import checkCategoryType from '../utils/checkCategoryType';

export default function useClickCategory() {
  const category = useSelector((state) => state.category);

  const dispatch = useDispatch();

  const handleClickCategory = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = e.currentTarget;

      if (category !== value && checkCategoryType(value)) {
        dispatch({
          type: 'clickCategory',
          payload: value,
        });
      }
    },
    [dispatch],
  );

  return { handleClickCategory };
}
