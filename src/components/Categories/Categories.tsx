interface CategoriesProps {
  categories: string[];
  currentCategory : string;
  handleSetCurrentCategory : (category : string) => void
}

function Categories({ categories, currentCategory, handleSetCurrentCategory } : CategoriesProps) {
  return (
    <ul className="categories">
      {categories.map((category) => (
        <li key={category}>
          <button type="button" data-testid={category} className={category === currentCategory ? 'selected' : ''} onClick={() => { handleSetCurrentCategory(category); }}>{category}</button>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
