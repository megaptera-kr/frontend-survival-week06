interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <ul style={{ display: 'flex', listStyle: 'none', padding: '0' }}>
      {categories.map((ctg) => (
        <li key={ctg}>
          <label>
            <input
              type="radio"
              name="category"
              value={ctg}
              checked={ctg === selectedCategory}
              onChange={onChange}
            />
            {ctg}
          </label>
        </li>
      ))}
    </ul>
  );
}
