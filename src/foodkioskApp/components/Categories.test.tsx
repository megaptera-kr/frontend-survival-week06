import { screen, fireEvent, waitFor } from '@testing-library/react';

import { container } from 'tsyringe';

import useRender from '../../../tests/utils';

import Categories from './Categories';

import Menus from './Menus';

import FetchController from './FetchController';

import categories from '../constans/categories';

describe('Categories Render', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  it('render all category buttons', () => {
    useRender(<Categories />);

    categories.forEach((category) => {
      const text = screen.getByText(category);

      expect(text).toBeInTheDocument();
    });
  });
});

describe('Get Correct Data By Categories Filter', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  const expectedValue = ['로드스시', '메가반점', '메리김밥', '혹등고래카레'];

  categories.forEach((category, idx) => {
    it(`return ${expectedValue[idx]}`, async () => {
      useRender(
        <>
          <Categories />
          <Menus />
          <FetchController />
        </>,
      );

      const button = screen.getByRole('button', { name: category });

      fireEvent.click(button);

      await waitFor(() => {
        const text = screen.getByText(expectedValue[idx]);
        expect(text).toBeInTheDocument();
      });
    });
  });
});
