import FilteredTable from './FilteredTable';
import SearchBar from './SearchBar';

export default function FilterableRestaurantsTable() {
  return (
    <div>
      <SearchBar />
      <FilteredTable />
    </div>
  );
}
