import Category from './Category';

type categoryFieldProps = {
    categories: string[]
    setFilterCategory:(value:string)=>void
}

export default function CategoryField(
  {
    categories,
    setFilterCategory,
  }:categoryFieldProps,
) {
  return (
    <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </ul>
  );
}
