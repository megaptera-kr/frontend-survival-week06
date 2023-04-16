import { ChangeEvent } from 'react';
import TextField from './TextField';
import CategoryButtonField from './CategoryButtonField';

interface SearchBarProps {
    filterText: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: (name: string) => void;
}

export default function SearchBar({ filterText, onChange, onClick }: SearchBarProps) {
  return (
    <>
      <TextField
        filterText={filterText}
        onChange={onChange}
      />
      <CategoryButtonField
        onClick={onClick}
      />
    </>
  );
}
