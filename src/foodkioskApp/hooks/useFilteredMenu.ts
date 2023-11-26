import { useMemo } from 'react';

import { useDebounce } from 'usehooks-ts';

import useSelector from './useSelector';

import select from '../utils/select';

import filterBySearchQuery from '../utils/filterBySearchQuery';

export default function useFilteredMenu() {
  const allRestaurants = useSelector((state) => state.restaurants);

  const query = useSelector((state) => state.query);

  const debouncedValue = useDebounce<string>(query, 200);

  const category = useSelector((state) => state.category);

  const restaurants = useMemo(() => {
    let result = [...allRestaurants];

    if (category === '전체') {
      result = filterBySearchQuery(result, debouncedValue);
    } else {
      result = filterBySearchQuery(
        select(result, 'category', category),
        debouncedValue,
      );
    }

    return result;
  }, [allRestaurants, category, debouncedValue]);

  return { restaurants };
}
