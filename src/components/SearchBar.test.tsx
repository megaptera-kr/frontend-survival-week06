import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import getCategories from '../utils/getCategories';
import fixtures from '../../fixtures';

describe('SearchBar', () => {
  const categories = getCategories(fixtures.restaurants);

  const filterText = '';
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  it('검색 필드 렌더링', () => {
    render(
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />,
    );

    screen.getByLabelText(/검색/);
  });

  it('필터링 버튼 렌더링', () => {
    render(
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />,
    );

    screen.getByText(/전체/);
    screen.getByText(/중식/);
  });
});
