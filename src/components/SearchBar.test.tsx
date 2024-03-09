/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['한식', '일식', '중식'];

  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn;

  beforeEach(() => {
    setFilterText.mockClear();
  });

  function renderSearchBar() {
    render(
      <SearchBar
        filterText=""
        setFilterText={setFilterText}
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    );
  }

  it('renders search label text', () => {
    renderSearchBar();

    screen.getByText(/검색/);
  });

  it('renders call categories', () => {
    renderSearchBar();

    screen.getByText(/전체/);

    categories.forEach((category) => screen.getByText(category));
  });
});
