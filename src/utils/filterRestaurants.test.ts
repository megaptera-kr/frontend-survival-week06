import filterRestaurants from './filterRestaurants';

import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('filterRestaurants', () => {
  context('with “전체” category', () => {
    it('returns all restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { filterText: '', filterCategory: '전체' },
      );

      expect(filteredRestaurants.length).toBe(restaurants.length);
    });
  });

  context('with “한식” category', () => {
    it('returns 한식 restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { filterText: '', filterCategory: '한식' },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('without filter text', () => {
    it('renders filtered restaurant', () => {
      const filterText = '테라김밥';
      const filterCategory = '전체';

      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

      expect(filteredRestaurants.length).toBe(0);
    });
  });

  context('with filter text', () => {
    it('renders filtered restaurant', () => {
      const filterText = '메리김밥';
      const filterCategory = '전체';

      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

      const filteredRestaurant = filteredRestaurants[0];

      expect(filteredRestaurants.length).toBe(1);
      expect(filteredRestaurant.name).toBe(filterText);
    });
  });
});
