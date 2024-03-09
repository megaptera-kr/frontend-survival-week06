import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const setFilterText = jest.fn();

  beforeEach(() => {
    setFilterText.mockClear();
  });

  function renderSearchBar() {
    render(<SearchBar filterText="" setFilterText={setFilterText} />);
  }

  it('renders search label text', () => {
    renderSearchBar();

    screen.getByText(/검색/);
  });
});
