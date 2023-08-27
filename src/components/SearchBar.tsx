import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
  value: string;
  setValue: (value: string) => void;
  categories: string[];
  setCategory: (category: string) => void;
}

export default function SearchBar({
  value,
  setValue,
  categories,
  setCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        value={value}
        setValue={setValue}
      />
      <Categories
        categories={categories}
        setCategory={setCategory}
      />
    </div>
  );
}
