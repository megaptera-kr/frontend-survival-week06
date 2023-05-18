import useRestaurantsStore from '../hooks/useRestaurantsStore';
import categories from '../utils/categories';
import CategoryButton from './CategoryButton';

export default function Categories() {
  const [{ restaurants }] = useRestaurantsStore();

  const restaurantCategories = categories(restaurants);

  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {restaurantCategories.map(
        (category) => (
          <CategoryButton
            key={category}
            name={category}
          />
        ),
      )}
    </div>
  );
}
