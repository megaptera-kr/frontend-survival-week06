import CategoryField from './CategoryField';
import TextField from './TextField';

type SearchBarProps = {
  categories: string[]
  filterText: string
  setFilterText: (value:string)=>void
  setFilterCategory:(value:string)=>void
}

export default function SearchBar({
  categories,
  filterText, setFilterText,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        label="검색"
        placeholder="식당검색"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CategoryField
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}
