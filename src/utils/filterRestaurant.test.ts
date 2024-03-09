import filterRestaurant from './filterRestaurant';

import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('filterRestaurant', () => {
  context('with “전체” category', () => {
    it('returns all restaurants', () => {
      const filteredRestaurants = filterRestaurant(
        restaurants,
        { filterText: '', filterCategory: '전체' },
      );

      expect(filteredRestaurants.length).toBe(restaurants.length);
    });
  });

  context('without filter text', () => {
    it('renders filtered restaurant', () => {
      const filterText = '테라김밥';
      const filterCategory = '전체';

      const filteredRestaurants = filterRestaurant(restaurants, { filterText, filterCategory });

      expect(filteredRestaurants.length).toBe(0);
    });
  });

  context('with filter text', () => {
    it('renders filtered restaurant', () => {
      const filterText = '메리김밥';
      const filterCategory = '전체';

      const filteredRestaurants = filterRestaurant(restaurants, { filterText, filterCategory });

      const filteredRestaurant = filteredRestaurants[0];

      expect(filteredRestaurants.length).toBe(1);
      expect(filteredRestaurant.name).toBe(filterText);
    });
  });
});
