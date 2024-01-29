import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['중식', '일식', '한식'];
  const setQuery = jest.fn();
  const categoryQuery = jest.fn();

  const renderSearchBar = () => {
    render(<SearchBar categories={categories} query="중식" setQuery={setQuery} setCategory={categoryQuery} />);
  };

  it('검색창이 존재한다.', () => {
    renderSearchBar();
    expect(screen.getByLabelText('검색')).toBeInTheDocument();
  });

  it('모든 카테고리 버튼이 전체를 포함한다', () => {
    renderSearchBar();
    expect(screen.getByText('전체')).toBeInTheDocument();
  });
});
