import CategoryBtn from './CategoryBtn';
import TextField from './TextField';

type SearchBarProps = {
    categories: string[];
    query: string;
    setQuery: (query:string) => void;
    setCategory: (category: string) => void;
}

export default function SearchBar({
  categories, query, setQuery, setCategory,
}:SearchBarProps) {
  return (
    <div>
      <TextField setQuery={setQuery} query={query} placeholderText="식당 이름을 입력해주세요" />
      <div>
        {['전체', ...categories].map((category) => (
          <CategoryBtn key={category} setCategory={setCategory} category={category} />
        ))}
      </div>
    </div>
  );
}
