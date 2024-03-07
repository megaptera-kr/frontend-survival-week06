import { render, screen } from '@testing-library/react';

import CategoryButtons from './CategoryButtons';

import fixtures from '../../fixtures';

import Category from '../types/CategoryType';

jest.mock('../hooks/useFetchCategories');

describe('CategoryButtons: CategoryButton', () => {
  const mockSetCategoryName = jest.fn();

  it('render collectly', () => {
    render(<CategoryButtons setCategoryName={mockSetCategoryName} />);

    const { categories } = fixtures;

    categories.forEach((item: Category) => {
      screen.getByRole('button', { name: item.name });
    });
  });
});
