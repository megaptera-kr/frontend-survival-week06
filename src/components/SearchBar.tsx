import Categories from './Categories';
import FilterTextField from './FilterTextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;

}

function SearchBar(
  {
    categories, filterText, setFilterText, setFilterCategory,
  }: SearchBarProps,
) {
  return (
    <div>
      <FilterTextField
        label="검색"
        placeholder="식당 이름을 입력해주세요"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}

export default SearchBar;
