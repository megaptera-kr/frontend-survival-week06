import { render, screen } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = ['전체', '한식, 중식, 일식'];
  const setFilterCategory = jest.fn();

  it('categories를 렌더링 한다.', () => {
    render((
      <Categories
        categories={categories}
        setCategory={setFilterCategory}
      />
    ));

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
