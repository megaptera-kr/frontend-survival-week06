import Category from './Category';

type CategoriesProps = {
    categories: string[];
    setFilterCategory: (text: string) => void;
}

export default function Categories({
  categories, setFilterCategory,
}: CategoriesProps) {
  return (
    <ul style={{
      display: 'flex',
      listStyle: 'none',
      padding: 0,
    }}

    >
      {['전체', ...categories].map((category: string) => (
        <Category
          key={category}
          category={category}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </ul>
  );
}
