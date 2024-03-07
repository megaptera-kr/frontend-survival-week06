import TextField from './TextField';
import CategoryButtons from './CategoryButtons';

type SearchBarProps = {
  searchText: string;
  setSearchText: (v: string) => void;
  setButtonName: (v: string) => void;
};

export default function SearchBar({
  searchText,
  setSearchText,
  setButtonName,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label='검색'
        placeholder='식당 이름...'
        text={searchText}
        setText={setSearchText}
      />
      <CategoryButtons setCategoryName={setButtonName} />
    </div>
  );
}
