import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const setFilterText = jest.fn();

const context = describe;

describe('<SearchBar />', () => {
  it('render search input', () => {
    render(<SearchBar
      filterText=""
      setFilterText={setFilterText}
    />);

    screen.getByLabelText('검색');
  });

  context('type text in the testbox', () => {
    it('execute change event handler with text', () => {
      render(<SearchBar
        filterText=""
        setFilterText={setFilterText}
      />);

      const textbox = screen.getByLabelText('검색');
      fireEvent.change(textbox, { target: { value: 'filter text' } });

      expect(setFilterText).toHaveBeenCalledWith('filter text');
    });
  });
});
