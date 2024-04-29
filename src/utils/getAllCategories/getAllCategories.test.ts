import fixture from '../../../fixtures';
import getAllCategories from './getAllCategories';

const context = describe;

describe('getAllCategories func', () => {
  const { restaurants } = fixture;
  context('restaurants가 빈 배열이라면', () => {
    it('"전체"를 포함한 배열만 반환한다.', () => {
      expect(getAllCategories([])).toEqual(['전체']);
    });
  });

  context('한식, 중식을 포함한 식당이 있으면', () => {
    it('전체, 중식, 한식을 포함한 배열을 반환한다.', () => {
      expect(getAllCategories(restaurants)).toEqual(['전체', '중식', '한식']);
    });
  });
});
