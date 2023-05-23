import Button from './atoms/button/Button';

type FilterCategoriesProps = {
  restaurantsCategories: string[];
  setFilterCategory: (value: string) => void;
}

export default function FilterCategories({
  restaurantsCategories, setFilterCategory,
}: FilterCategoriesProps) {
  function handleClick(category: string) {
    setFilterCategory(category);
  }
  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: '0' }}>
      {restaurantsCategories.map((category: string) => (
        <li
          key={category}
          style={{ marginRight: '3rem' }}
        >
          <Button
            name={`${category}`}
            onClick={() => handleClick(category)}
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
}
