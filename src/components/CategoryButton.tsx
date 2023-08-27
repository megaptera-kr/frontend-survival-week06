type CategoryButtonProps = {
  category: string;
  setCategory: (category: string) => void;
}

export default function CategoryButton({ category, setCategory }: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setCategory(category)}
    >
      {category}

    </button>
  );
}
