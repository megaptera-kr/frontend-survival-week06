import useRestaurantsStore from '../../hooks/useRestaurantsStore';
import { Category } from '../../types/restaurant';
import CategoryButton from './CategoryButton';

export default function Categories() {
  const [, store] = useRestaurantsStore();

  const restaurantCategories = store.categories();

  const handleCategory = (category:Category) => {
    store.selectCategory(category);
  };

  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {restaurantCategories.map(
        (category) => (
          <CategoryButton
            key={category}
            name={category}
            handleCategory={handleCategory}
          />
        ),
      )}
    </div>
  );
}
