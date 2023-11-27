import Category from './Category';

type CategoriesType = {
  categories: string[];
  setCategory: (text: string) => void;
}

export default function Categories({ categories, setCategory }: CategoriesType) {
  return (
    <ul style={{
      display: 'flex',
      padding: 0,
      listStyle: 'none',
    }}
    >
      {
        ['전체', ...categories].map((el:string) => (
          <Category category={el} key={el} onClick={setCategory} />
        ))
      }
    </ul>
  );
}
