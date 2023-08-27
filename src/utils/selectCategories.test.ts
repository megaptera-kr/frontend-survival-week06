import restaurants from '../../fixtures/restaurants';
import selectCategories from './selectCategories';

const context = describe;

describe('selectCategories', () => {
  context('restaurant가 있을 때', () => {
    it('categories를 리턴한다.', () => {
      const categories = selectCategories(restaurants);

      expect(categories).toHaveLength(4);
    });
  });
});
