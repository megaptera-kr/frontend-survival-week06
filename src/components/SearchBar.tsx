import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
    categories: string[];
    filterText: string;
    setTextFilter: (text: string) => void;
    setFilterCategory: (text: string) => void;
}

export default function SearchBar({
  categories, filterText, setTextFilter, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        text={filterText}
        setText={setTextFilter}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
