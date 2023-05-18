import Categories from './Categories';
import TextFiled from './TextFiled';

export default function SearchBar() {
  return (
    <div className="flex flex-col justify-center">
      <TextFiled
        label="검색"
        placeholder="식당 이름"
      />
      <Categories />
    </div>
  );
}
