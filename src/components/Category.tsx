type CategoryProps = {
    category: string
    setFilterCategory:(value:string)=>void
}

export default function Category(
  { category, setFilterCategory }:CategoryProps,
) {
  const handleClick = () => {
    setFilterCategory(category);
  };
  return (
    <li key={category}>
      <button
        style={{ marginRight: '1rem' }}
        type="button"
        value={category}
        onClick={handleClick}
      >
        {category}
      </button>
    </li>
  );
}
