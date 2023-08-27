import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import fixtures from '../../fixtures';

describe('<SaerchBar />', () => {
  const categories = ['중식', '한식', '일식'];
  const setQuery = jest.fn();
  const setCategory = jest.fn();

  it('render all categories', () => {
    render(<SearchBar
      setQuery={setQuery}
      setCategory={setCategory}
      categories={categories}
    />);

    screen.getByRole('button', { name: '전체' });
    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
