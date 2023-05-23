import FilterButtons from './FilterButtons';
import FilterKeyword from './FilterKeyword';

type Props = {
  categories: string [];
  keyword: string;
  setKeyword: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export default function SearchBar({
  categories, keyword, setKeyword, selectedCategory, setSelectedCategory,
}: Props) {
  return (
    <section>
      <FilterKeyword keyword={keyword} setKeyword={setKeyword} />
      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </section>
  );
}
