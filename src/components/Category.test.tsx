/* eslint-disable comma-dangle */
import { fireEvent, render, screen } from '@testing-library/react';
import Category from './Category';

describe('Category', () => {
  const category = '일식';
  const setFilterCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCategory() {
    render(
      <Category category={category} setFilterCategory={setFilterCategory} />
    );
  }

  it('renders category text', () => {
    renderCategory();

    screen.getByText(category);
  });

  it('listens for category click event', () => {
    renderCategory();

    fireEvent.click(screen.getByText(category));
    expect(setFilterCategory).toBeCalledWith(category);
  });
});
