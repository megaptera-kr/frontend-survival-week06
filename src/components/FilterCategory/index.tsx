import { MouseEvent } from 'react';
import { Category } from '../../types/Category';

type FilterCategoryProps = {
  categories:Category[]
  selectedCategory:Category;
  setSelectedCategory:(value:Category) => void
}

function FilterCategory({
  categories, selectedCategory, setSelectedCategory,
}:FilterCategoryProps) {
  const handleChange = (event:MouseEvent<HTMLButtonElement>) => {
    const { textContent } = event.currentTarget;
    setSelectedCategory(textContent as Category);
  };
  return (
    <div>
      {categories.map((category) => (
        <button
          type="button"
          name={`#${category}`}
          key={category}
          style={{ color: category === selectedCategory ? 'red' : '' }}
          onClick={handleChange}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default FilterCategory;
