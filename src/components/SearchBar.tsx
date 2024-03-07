import TextField from './TextField';
import CategoryButtons from './CategoryButtons';

type SearchBarProps = {
  handleCategoryButton: (v: string) => void;
};

export default function SearchBar({ handleCategoryButton }: SearchBarProps) {
  return (
    <div>
      <TextField label='검색' placeholder='식당 이름...' />
      <CategoryButtons handleCategoryButton={handleCategoryButton} />
    </div>
  );
}
