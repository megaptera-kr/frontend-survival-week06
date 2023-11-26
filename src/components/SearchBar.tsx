import Categories from './Categories';
import TextField from './TextField';

type SearchBarType = {
  filterText: string;
  categories: string[];
  setFilterText: (text: string) => void;
  setCategory: (text: string) => void;
}

export default function SearchBar({
  filterText, categories, setFilterText, setCategory,
}: SearchBarType) {
  return (
    <div>
      <TextField label="검색" placeholder="식당 이름" text={filterText} setText={setFilterText} />
      <Categories categories={categories} setCategory={setCategory} />
    </div>

  );
}
