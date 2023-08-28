import CategoryButton from './CategoryButton';

type CategoriesProps = {
  categories: string[];
  setCategory: (category: string) => void;
}

export default function Categories({
  categories,
  setCategory,
}: CategoriesProps) {
  return (
    <ul
      style={{
        display: 'flex',
        padding: 0,
        listStyle: 'none',
      }}
    >
      {categories.map((category) => (
        <li
          key={category}
          style={{
            marginRight: '0.5rem',
          }}
        >
          <CategoryButton
            category={category}
            setCategory={setCategory}
          />
        </li>
      ))}
    </ul>
  );
}
