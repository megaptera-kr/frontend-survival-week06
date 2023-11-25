import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { restaurants } from '../../features/restaurants';
import Categories from './Categories';
import getCategories from '../../utils/getCategory';

const context = describe;
let currentCategory = '전체';
const handleChangeCategory = (category : string) => { currentCategory = category; };

describe('카테고리 목록이 필요하다.', () => {
  context('매장 리스트에서 중복을 제외한 카테고리 목록을 가져온다.', () => {
    it('카테고리 목록이 조회된다.', () => {
      const categories = getCategories(restaurants);
      render(<Categories
        categories={categories}
        currentCategory={currentCategory}
        handleSetCurrentCategory={handleChangeCategory}
      />);
      expect(screen.getByTestId('전체')).toBeInTheDocument();
      expect(screen.getByTestId('한식')).toBeInTheDocument();
      expect(screen.getByTestId('중식')).toBeInTheDocument();
      expect(screen.getByTestId('일식')).toBeInTheDocument();
    });
  });
});

describe('카테고리를 선택한다', () => {
  context('한식을 선택한다.', () => {
    it('선택된 카테고리가 한식으로 변경된다.', async () => {
      const categories = getCategories(restaurants);
      render(<Categories
        categories={categories}
        currentCategory={currentCategory}
        handleSetCurrentCategory={handleChangeCategory}
      />);
      fireEvent.click(screen.getByTestId('한식'));
      await waitFor(() => {
        expect(currentCategory).toBe('한식');
      });
    });
  });
});
