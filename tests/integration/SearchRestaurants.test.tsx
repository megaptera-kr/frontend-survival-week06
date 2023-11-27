import { fireEvent, waitFor, screen } from '@testing-library/react';

import useRender from '../utils';

import context from '../../src/foodkioskApp/utils/test_config';

import SearchRestaurants from '../../src/foodkioskApp/components/SearchRestaurants';

import FetchController from '../../src/foodkioskApp/components/FetchController';

import Menus from '../../src/foodkioskApp/components/Menus';

describe('식당검색', () => {
  context('검색어를 입력하면', () => {
    it('필터링된 식당이 나온다.', async () => {
      useRender(
        <>
          <SearchRestaurants
            htmlFor='input-검색'
            placeholder='식당 이름을 입력해 주세요.'
          />
          <Menus />
          <FetchController />
        </>
      );

      const input = screen.getByPlaceholderText(
        /식당 이름을 입력해 주세요./
      ) as HTMLInputElement;

      fireEvent.change(input, { target: { value: '메' } });

      await waitFor(() => {
        const text = screen.getByText(/메리김밥/);
        expect(text).toBeInTheDocument();
      });

      await waitFor(() => {
        const text = screen.queryByText(/혹등고래카레/i);
        expect(text).toBeNull();
      });

      fireEvent.change(input, { target: { value: '' } });

      await waitFor(() => {
        const text = screen.getByText(/혹등고래카레/i);
        expect(text).toBeInTheDocument();
      });
    });
  });
});
