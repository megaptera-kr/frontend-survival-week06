interface CategoryButtonFieldProps {
  onClick: (name: string) => void;
}

export default function CategoryButtonField({ onClick }: CategoryButtonFieldProps) {
  const categories = ['전체', '중식', '한식', '일식'];

  return (
    <div style={{ marginTop: 15, marginBottom: 15 }}>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          name={category}
          style={{ marginRight: 15 }}
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
