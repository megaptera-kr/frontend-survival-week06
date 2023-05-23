import Categories from './Categories';

type SearchBarProps = {
  categories: string[],
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
}

export default function SearchBar({
  categories, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <label htmlFor="restaurantSearch">검색</label>
      <input
        type="text"
        id="restaurantSearch"
        onChange={(event) => {
          setFilterText(event.target.value);
        }}
      />
      <Categories categories={categories} setFilterCategory={setFilterCategory} />
    </div>
  );
}
