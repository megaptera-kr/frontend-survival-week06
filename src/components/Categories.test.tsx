import { render, screen } from '@testing-library/react';

import Categories from './Categories';

describe('Category Component', () => {
  const categories = ['중식', '한식', '일식'];
  const setCategory = jest.fn();

  it('renders Category', () => {
    render(<Categories categories={categories} setCategory={setCategory} />);

    screen.getByText(/전체/);
    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
