type CategoryBtnProps = {
    category: string;
    setCategory: (category:string) => void;
}
export default function CategoryBtn({ category, setCategory }:CategoryBtnProps) {
  const handleClickCategory = (selectCategory: string) => {
    setCategory(selectCategory);
  };

  return (
    <button type="button" onClick={() => handleClickCategory(category)}>
      {category}
    </button>
  );
}
