import Category from './Category';

type CategoriesProps = {
  categories: string[];
  setFilterCategory: (text: string) => void;
};

export default function Categories({
  categories,
  setFilterCategory,
}: CategoriesProps) {
  return (
    <ul>
      {['전체', ...categories].map((category) => (
        <Category
          key={category}
          category={category}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </ul>
  );
}
