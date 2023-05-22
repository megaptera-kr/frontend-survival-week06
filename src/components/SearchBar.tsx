import FilterTextField from './FilterTextField';
import FilterCategory from './FilterCategory';

type SearchBarProps = {
  categories: string[],
  filterText: string,
  setFilterText: (text: string) => void,
  setFilterCategory: (text: string) => void,
}

export default function SearchBar({
  categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <FilterTextField
        text={filterText}
        setText={setFilterText}
      />
      <FilterCategory
        categories={categories}
        setCategory={setFilterCategory}
      />
    </div>
  );
}
