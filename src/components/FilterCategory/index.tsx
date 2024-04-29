import { Category } from '../../types/Category';

type FilterCategoryProps = {
  categories:Category[]
}

function FilterCategory({ categories }:FilterCategoryProps) {
  return (
    <div>
      {categories.map((category) => (
        <button
          type="button"
          name={`#${category}`}
          key={category}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default FilterCategory;
