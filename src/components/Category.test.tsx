import { fireEvent, render, screen } from '@testing-library/react';
import Category from './Category';

describe('Category', () => {
  const category = '한식';

  const setFilterCategory = jest.fn();

  function renderCategory() {
    render((
      <Category
        category={category}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Category', () => {
    renderCategory();

    screen.getByText('한식');
  });

  it('listens to category click event', () => {
    renderCategory();

    fireEvent.click(screen.getByText('한식'));

    expect(setFilterCategory).toBeCalledWith(category);
  });
});
