import TextField from './TextField';

type SearchBarProp = {
  filterText: string;
  setFilterText: (value: string) => void;
};

export default function SearchBar({
  filterText,
  setFilterText,
}: SearchBarProp) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름을 입력해주세요."
        text={filterText}
        setText={setFilterText}
      />
    </div>
  );
}
