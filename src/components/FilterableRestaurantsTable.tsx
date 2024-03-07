import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import useSearchField from '../hooks/useSearchField';
import useButtonField from '../hooks/useButtonField';

export default function FilterableRestaurantsTable() {
  const [searchText, setSearchText] = useSearchField('');
  const [buttonName, setButtonName] = useButtonField('전체');

  return (
    <>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        setButtonName={setButtonName}
      />
      <RestaurantTable restaurantName={searchText} categoryName={buttonName} />
    </>
  );
}
