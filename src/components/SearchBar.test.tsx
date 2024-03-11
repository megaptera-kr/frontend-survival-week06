import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

jest.mock('../hooks/useFetchCategories');

test('ComponentTest: SearchBar', () => {
  const mockSearchText = '';
  const mockSetSearchText = jest.fn();
  const mockSetButtonName = jest.fn();

  render(
    <SearchBar
      searchText={mockSearchText}
      setSearchText={mockSetSearchText}
      setButtonName={mockSetButtonName}
    />,
  );

  screen.getByLabelText('검색');
  screen.getByPlaceholderText('식당 이름...');
  screen.getByRole('button', { name: '전체' });
  screen.getByRole('button', { name: '한식' });
  screen.getByRole('button', { name: '일식' });
  screen.getByRole('button', { name: '중식' });
});
