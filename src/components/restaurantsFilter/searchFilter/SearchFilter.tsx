import { useRef } from 'react';

interface SearchFilterProps {
  id: string;
  searchText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

export default function SearchFilter({ id, searchText, onChange }: SearchFilterProps) {
  const inputId = useRef(`search-${id}`);

  return (
    <div>
      <label htmlFor={inputId.current}>search</label>
      <input id={inputId.current} name="searchText" value={searchText} onChange={onChange} />
    </div>
  );
}
