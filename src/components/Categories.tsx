import Category from './Category';

type CategoriesProps = {
  categories: string[];
  setFilterCategory: (text: string) => void;
}

function Categories({ categories, setFilterCategory }: CategoriesProps) {
  return (
    <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
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

export default Categories;
