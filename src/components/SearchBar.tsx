import CategoryBtns from './CategoryBtns';
import TextField from './TextField';

type SearchBarProps = {
  setQuery: (value: string) => void;
  setCategory: (value: string) => void;
  categories: string[];
}

function SearchBar({ setQuery, setCategory, categories }: SearchBarProps) {
  return (
    <div>
      <TextField setQuery={setQuery} />
      <CategoryBtns categories={categories} setCategory={setCategory} />
    </div>
  );
}

export default SearchBar;
