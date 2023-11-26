import { screen, fireEvent } from '@testing-library/react';

import useRender from '../../../tests/utils';

import SearchRestaurants from './SearchRestaurants';

import context from '../utils/test_config';

const handleSearchQuery = jest.fn();

jest.mock('../hooks/useSearchRestaurants', () => () => ({
  handleSearchQuery,
}));

describe('SearchRestaurants Render', () => {
  context('view', () => {
    it('label and input', () => {
      useRender(
        <SearchRestaurants
          htmlFor='input-검색'
          placeholder='식당 이름을 입력해 주세요.'
        />,
      );

      expect(screen.getByLabelText(/input-검색/)).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(/식당 이름을 입력해 주세요./),
      ).toBeInTheDocument();
    });
  });

  context('handleSearchQuery event', () => {
    beforeEach(() => {
      handleSearchQuery.mockClear();
    });

    it('value is 메 when event occurs in the input', () => {
      useRender(
        <SearchRestaurants
          htmlFor='input-검색'
          placeholder='식당 이름을 입력해 주세요.'
        />,
      );

      const input = screen.getByPlaceholderText(
        /식당 이름을 입력해 주세요./,
      ) as HTMLInputElement;

      fireEvent.change(input, { target: { value: '메' } });

      expect(input).toHaveValue('메');
    });
  });
});
