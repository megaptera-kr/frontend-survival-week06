import { ChangeEvent } from 'react';

interface SearchBarProps {
  handleSetSearchKeyword : (keyword : string) => void
}

function SearchBar({ handleSetSearchKeyword } : SearchBarProps) {
  const onChangeSearchKeyword = (event : ChangeEvent<HTMLInputElement>) => {
    handleSetSearchKeyword(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="검색"
        onChange={onChangeSearchKeyword}
      />
    </div>
  );
}

export default SearchBar;
