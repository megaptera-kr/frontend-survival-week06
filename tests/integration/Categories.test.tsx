import { fireEvent, waitFor, screen } from '@testing-library/react';

import useRender from '../utils';

import context from '../../src/foodkioskApp/utils/test_config';

import Categories from '../../src/foodkioskApp/components/Categories';

import Menus from '../../src/foodkioskApp/components/Menus';

import FetchController from '../../src/foodkioskApp/components/FetchController';

import categories from '../../src/foodkioskApp/constans/categories';

describe('식당검색', () => {
  const expectedValue = ['로드스시', '메가반점', '메리김밥', '혹등고래카레'];

  context('카테고리들을 클릭하면', () => {
    categories.forEach((category, idx) => {
      it(`필터링된 식당이 나온다.`, async () => {
        useRender(
          <>
            <Categories />
            <Menus />
            <FetchController />
          </>
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
});
