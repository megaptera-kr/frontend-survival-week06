import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['중식', '한식', '일식'];

  const setFilterText = jest.fn();

  const setFilterCategory = jest.fn();

  function renderSearchBar() {
    render((
      <SearchBar
        categories={categories}
        filterText=""
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  it('renders SearchBar', () => {
    renderSearchBar();

    screen.getByText(/검색/);
  });

  it('renders all categories', () => {
    renderSearchBar();

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
