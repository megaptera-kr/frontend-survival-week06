import Restaurant from '../types/RestaurantType';

type FiterCategoryProps = {
  restaurants: Restaurant[];
  setCategory: (value: string) => void;
};

export default function FiterCategory({
  restaurants,
  setCategory,
}: FiterCategoryProps) {
  const categories: string[] = restaurants.reduce(
    (result: string[], restaurant: Restaurant) => {
      if (result.indexOf(restaurant.category) < 0) {
        result.push(restaurant.category);
      }
      return result;
    },
    ['전체'],
  );
  return (
    <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
      {categories.map((category: string) => (
        <li key={category} style={{ marginRight: '1rem' }}>
          <button
            type="button"
            onClick={() => {
              setCategory(category === '전체' ? '' : category);
            }}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
