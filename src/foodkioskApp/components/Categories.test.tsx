import { screen, fireEvent } from '@testing-library/react';

import useRender from '../../../tests/utils';

import context from '../utils/test_config';

import Categories from './Categories';

import categories from '../constans/categories';

const handleClickCategory = jest.fn();

jest.mock('../hooks/useClickCategory', () => () => ({
  handleClickCategory,
}));

describe('Categories Render', () => {
  context('view', () => {
    it('all category buttons', () => {
      useRender(<Categories />);

      categories.forEach((category) => {
        const text = screen.getByText(category);

        expect(text).toBeInTheDocument();
      });
    });
  });

  context('handleClickCategory event', () => {
    beforeEach(() => {
      handleClickCategory.mockClear();
    });

    categories.forEach((category) => {
      it('calls event when a category is clicked', () => {
        useRender(<Categories />);

        const categoryButton = screen.getByText(category);
        fireEvent.click(categoryButton);

        expect(handleClickCategory.mock.calls[0][0].target.value).toBe(
          category,
        );
      });
    });
  });
});
