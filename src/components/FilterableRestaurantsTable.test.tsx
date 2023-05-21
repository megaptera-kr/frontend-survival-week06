import {
  render, screen,
} from '@testing-library/react';
import FilterableRestaurantsTable from './FilterableRestaurantsTable';

const context = describe;

describe('FilterableRestaurantsTable ', () => {
  function renderFilterableRestaurantsTable() {
    render(<FilterableRestaurantsTable />);
  }
  context('when render component', () => {
    it('show table content', () => {
      renderFilterableRestaurantsTable();

      expect(screen.getByText(/이름/)).toBeInTheDocument();
      expect(screen.getByText(/종류/)).toBeInTheDocument();
      expect(screen.getByText(/메뉴/)).toBeInTheDocument();
    });

    it('show search text field area', () => {
      renderFilterableRestaurantsTable();

      expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
    });

    it('show filter categories area', () => {
      renderFilterableRestaurantsTable();

      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
    });
  });
});
