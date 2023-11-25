import { restaurants } from '../features/restaurants';
import getCategories from './getCategory';

const context = describe;
describe('매장의 분류가 필요하다.', () => {
  context('레스토랑 리스트에서 전체를 포함하여 분류만 추출한다.', () => {
    const categories = getCategories(restaurants);
    it('추출된 배열에는 전체가 있다.', () => {
      expect(categories.includes('전체')).toBeTruthy();
    });
    it('추출된 배열에는 중식이 있다.', () => {
      expect(categories.includes('중식')).toBeTruthy();
    });
    it('추출된 배열에는 일식이 있다.', () => {
      expect(categories.includes('일식')).toBeTruthy();
    });
    it('추출된 배열에는 한식이 있다.', () => {
      expect(categories.includes('한식')).toBeTruthy();
    });
  });
});
