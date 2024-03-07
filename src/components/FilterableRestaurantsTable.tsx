import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantsTable() {
  const [buttonValue, setButtonValue] = useState<string>('');

  const handleCategoryButton = (value: string) => {
    setButtonValue(value);
  };

  return (
    <>
      <SearchBar handleCategoryButton={handleCategoryButton} />
      <RestaurantTable buttonValue={buttonValue} />
    </>
  );
}
