import TextField from './TextField';
import Categories from './Categories';

type SearchBarProp = {
  filterText: string;
  setFilterText: (value: string) => void;
  categories: string[];
  setFilterCategory: (text: string) => void;
};

export default function SearchBar({
  filterText,
  setFilterText,
  categories,
  setFilterCategory,
}: SearchBarProp) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름을 입력해주세요."
        text={filterText}
        setText={setFilterText}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
