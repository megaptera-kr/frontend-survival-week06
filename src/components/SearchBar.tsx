import useFetchRestaurants from '../hooks/useFetchRestaurants';
import contractCategories from '../utils/contractCategories';
import ButtonField from './ButtonField';
import TextField from './TextField';

export default function SearchBar() {
  const restaurants = useFetchRestaurants();
  const categories = contractCategories(restaurants);
  return (
    <>
      <div>
        <TextField />
      </div>
      <div>
        {
          ['전체', ...categories].map((category, index) => {
            const key = `#${index}`;
            return (
              <ButtonField key={key} category={category} />
            );
          })
        }
      </div>
    </>
  );
}
