import { Category } from '../../types/restaurant';

type Props = {
  name: Category;
  handleCategory: (category: Category) => void;
}

export default function CategoryButton({ name, handleCategory }:Props) {
  return (
    <button
      className="py-2 px-4 bg-blue-300 rounded-md"
      type="button"
      onClick={() => handleCategory(name)}
    >
      {name}
    </button>
  );
}
