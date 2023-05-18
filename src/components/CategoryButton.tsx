import useRestaurantsStore from '../hooks/useRestaurantsStore';
import { Category } from '../types/restaurant';

type Props = {
  name: Category;
}

export default function CategoryButton({ name }:Props) {
  const [, store] = useRestaurantsStore();
  return (
    <button
      className="py-2 px-4 bg-blue-300 rounded-md"
      type="button"
      onClick={() => store.selectCategory(name)}
    >
      {name}
    </button>
  );
}
