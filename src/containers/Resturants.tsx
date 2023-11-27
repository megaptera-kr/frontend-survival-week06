import { useEffect } from 'react';
import { useStore } from 'usestore-ts';
import Input from '../components/Input';
import ResturantsList from './ResturantsList';

import Select from '../components/Select';
import useInput from '../hooks/useInput';
import Grid from '../components/Grid';
import filterList from '../utils/filterList';
import restaurantsStore from '../stores/restaurantsStore';

export function Loading() {
  return <span>Loading...</span>;
}

function Restaurants() {
  const { value: name, handleChange: handleKeywordChange } = useInput('');
  const { value: category, handleChange: handleCategoryClick } = useInput('');

  const [{ state }, store] = useStore(restaurantsStore);

  // 1. forceUpdate전달해줘야함.
  // 2. 상태가 업데이트 되었을 때 마다 publish 호출해줘야함.

  useEffect(() => {
    store.fetch();
  }, []);

  const filtered = filterList(state.data, [{ category: 'name', keyword: name }, { category: 'category', keyword: category }]);

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
        {store.state.apiStatus === 'SUCCESS' && <ResturantsList resturantsList={filtered} />}
      </section>
    </div>
  );
}

export default Restaurants;
