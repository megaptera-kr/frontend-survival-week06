import { useState } from 'react';

import type { RestaurantFilter } from '../types/restaurants';

interface UseRestaurantsFilter {
  filter: RestaurantFilter;
  handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function useRestaurantsFilter(): UseRestaurantsFilter {
  const [filter, setFilter] = useState<RestaurantFilter>({
    searchText: '',
    category: '전체',
  });

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    filter,
    handleChangeFilter,
  };
}
