import useRestaurantsStore from '../../hooks/useRestaurantsStore';
import Categories from './Categories';
import TextFiled from './TextFiled';

export default function SearchBar() {
  const [, store] = useRestaurantsStore();
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => store.search(e.target.value);
  return (
    <div className="flex flex-col justify-center">
      <TextFiled
        label="검색"
        placeholder="식당 이름"
        handleChange={handleChange}
      />
      <Categories />
    </div>
  );
}
