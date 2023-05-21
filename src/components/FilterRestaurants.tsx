import FilterCategories from './FilterCategories';
import InputText from './atoms/input/InputText';

type FilterRestaurantsProps = {
  restaurantsCategories: string[];
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
}

export default function FilterRestaurants({
  restaurantsCategories, setFilterText, setFilterCategory,
}: FilterRestaurantsProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setFilterText(value);
  };
  return (
    <div>
      <InputText
        placeholder="이름 검색"
        label="검색"
        onChange={handleChange}
      />
      <FilterCategories
        restaurantsCategories={restaurantsCategories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
