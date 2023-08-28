import { fireEvent, render, screen } from '@testing-library/react';
import Category from './Category';

describe('Category', () => {
  const categories = ['한식', '중식', '일식'];
  const setCategory = jest.fn();

  it('render Category', () => {
    render((
      <Category
        categories={categories}
        setCategory={setCategory}
      />
    ));

    fireEvent.click(screen.getByText(/중식/));

    expect(setCategory).toBeCalled();
  });
});
