import fixtures from '../../fixtures';

import filterRestaurants from './filterRestaurants';

import DEFAULT_SELECTED_CATEGORY from '../constants/categories';

const context = describe;

describe('filterRestaurants', () => {
  context('searchKeyword가 있을 때', () => {
    it('검색 키워드가 포함된 레스토랑만 반환한다.', () => {
      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        searchKeyword: '메가',
        selectedCategory: DEFAULT_SELECTED_CATEGORY,
      });

      expect(filteredRestaurants).toHaveLength(1);
    });
  });

  context('selectedCategory가 있을 때', () => {
    it('선택된 카테고리의 레스토랑만 반환한다.', () => {
      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        searchKeyword: '',
        selectedCategory: '중식',
      });

      expect(filteredRestaurants).toHaveLength(1);
    });
  });

  context('searchKeyword와 selectedCategory가 없을 때', () => {
    it('모든 레스토랑을 반환한다.', () => {
      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        searchKeyword: '',
        selectedCategory: DEFAULT_SELECTED_CATEGORY,
      });

      expect(filteredRestaurants).toHaveLength(3);
    });
  });
});
