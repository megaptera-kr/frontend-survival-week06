import Category from './Category';
import TextField from './TextField';

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
      <TextField
        text={filterText}
        setText={setFilterText}
      />
      <Category
        categories={categories}
        setCategory={setFilterCategory}
      />
    </div>
  );
}
