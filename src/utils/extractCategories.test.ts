import fixtures from '../../fixtures';
import extractCategories from './extractCategories';

const context = describe;

describe('util extractCategoris', () => {
  context('input restaurants data', () => {
    it('extract categories', () => {
      const categories = extractCategories(fixtures.restaurants);
      expect(categories).toEqual(['전체', 'Category-01', 'Category-02']);
    });
  });
});
