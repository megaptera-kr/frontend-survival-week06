import Input from '../components/Input';
import ResturantsList from './ResturantsList';

import Select from '../components/Select';
import useInput from '../hooks/useResturantFilter';
import useFetchResturant from '../hooks/useFetchResturant';
import { RestaurantList } from '../../types';
import filterList from '../utils/filterList';
import Grid from '../components/Grid';

export function Loading() {
  return <span>Loading...</span>;
}

const useRestaurantListFilter = (name: string, category: string) => {
  const { data } = useFetchResturant();

  const filtered = data
    && (filterList(data, [
      { category: 'category', keyword: category },
      { category: 'name', keyword: name },
    ]) as RestaurantList);

  return {
    data,
    filtered,
  };
};

function Restaurants() {
  const { value: name, handleChange: handleKeywordChange } = useInput('');
  const { value: category, handleChange: handleCategoryClick } = useInput('');

  const { filtered } = useRestaurantListFilter(name, category);

  return (
    <div data-testid="Restaurants" className="row">
      <section>
        <Input
          label="검색"
          value={name}
          placeholder="식당 이름"
          onChange={handleKeywordChange}
        />
        <Select
          options={[
            { label: '전체', value: '' },
            { label: '중식', value: '중식' },
            { label: '한식', value: '한식' },
            { label: '일식', value: '일식' },
          ]}
          onClick={handleCategoryClick}
        />
      </section>
      <section className="row">
        <Grid gridTemplateColumns=".3fr .3fr 1fr">
          <li>식당 이름</li>
          <li>종류</li>
          <li>메뉴</li>
        </Grid>
        {filtered && <ResturantsList resturantsList={filtered} />}
      </section>
    </div>
  );
}

export default Restaurants;
