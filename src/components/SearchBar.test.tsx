import { screen, render } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['중식', '한식', '일식'];
  const setFilterText = jest.fn();
  const setCategory = jest.fn();

  function renderSearchBar() {
    render(<SearchBar
      filterText=""
      categories={categories}
      setFilterText={setFilterText}
      setCategory={setCategory}
    />);
  }

  it('SearchBar Component', () => {
    renderSearchBar();

    screen.getByText('검색');
  });

  it('render Categories', () => {
    renderSearchBar();

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
