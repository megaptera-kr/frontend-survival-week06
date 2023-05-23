import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RestaurnatsFilter from './RestaurnatsFilter';

const context = describe;

describe('Restaurants Filter', () => {
  const categories = ['한식', '중식', '일식'];
  const filter = { searchText: '', category: '전체' };
  const onChangeFilter = jest.fn();

  function renderRestaurantsFilter() {
    return render(<RestaurnatsFilter
      categories={categories}
      filter={filter}
      onChangeFilter={onChangeFilter}
    />);
  }

  it("render 'search' label input", () => {
    renderRestaurantsFilter();

    expect(screen.getByLabelText('search')).toBeInTheDocument();
  });

  it('render all categories', () => {
    renderRestaurantsFilter();

    categories.forEach((category) => {
      screen.getByRole('radio', { name: category });
    });
  });

  context('when type search text', () => {
    it('calls onChangeHandler', async () => {
      renderRestaurantsFilter();
      const searchInput = screen.getByLabelText('search');

      await userEvent.type(searchInput, '메가반점');

      expect(onChangeFilter).toHaveBeenCalled();
    });
  });

  context('when click category button', () => {
    it('calls onChangeHandler', async () => {
      renderRestaurantsFilter();

      categories.forEach(async (category) => {
        const categoryButton = screen.getByRole('radio', { name: category });

        await userEvent.click(categoryButton);

        expect(onChangeFilter).toHaveBeenCalled();
      });
    });
  });
});
