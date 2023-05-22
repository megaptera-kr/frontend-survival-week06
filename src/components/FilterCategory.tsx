type filterCategoryProps = {
    categories: string[],
    setCategory: (category: string) => void,
}

export default function filterCategory({
  categories, setCategory,
}: filterCategoryProps) {
  const handleClickCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <div>
      {['전체', ...categories].map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => handleClickCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
