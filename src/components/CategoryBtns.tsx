type CategoryBtnsProps = {
  categories: string[];
  setCategory: (value: string) => void;
}

function CategoryBtns({ categories, setCategory }: CategoryBtnsProps) {
  const handleClickBtn = (category: string) => {
    setCategory(category);
  };

  return (
    <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
      {['전체', ...categories].map((category) => (
        <li key={category} style={{ marginRight: '1rem' }}>
          <button
            type="button"
            name={`#${category}`}
            onClick={() => handleClickBtn(category)}
          >
            {category}

          </button>
        </li>
      ))}
    </ul>
  );
}

export default CategoryBtns;
