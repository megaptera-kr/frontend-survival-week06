/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = ['한식', '일식', '중식'];
  const setFilterCategory = jest.fn;
  it('render Category button', () => {
    render(
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    );

    categories.map((category) => screen.getByText(category));
  });
});
