type CategoryProps = {
    categories: string[],
    setCategory: (category: string) => void,
}

export default function Category({
  categories, setCategory,
}: CategoryProps) {
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
