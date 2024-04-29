import { ChangeEvent } from 'react';

type SearchBarProps = {
  filterText:string;
  setFilterText:(value:string) => void
}

function SearchBar({ filterText, setFilterText }:SearchBarProps) {
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <div>
      <label htmlFor="search">검색</label>
      <input
        id="search"
        type="text"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
