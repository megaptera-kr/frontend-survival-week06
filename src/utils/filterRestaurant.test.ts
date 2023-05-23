import fixtures from '../../fixtures';
import filterRestaurant from './filterRestaurant';

const context = describe;

describe('filterRestaurants', () => {
  const { restaurants } = fixtures;

  context('with “전체” category', () => {
    it('returns all restaurants', () => {
      const filteredRestaurants = filterRestaurant(
        { restaurants, filterText: '', filterCategory: '전체' },
      );

      expect(filteredRestaurants.length).toBe(restaurants.length);
    });
  });

  context('with “한식” category', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurant(
        { restaurants, filterText: '', filterCategory: '한식' },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with “중식” category', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurant(
        { restaurants, filterText: '', filterCategory: '중식' },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with “일식” category', () => {
    it('returns selected category restaurants', () => {
      const filteredRestaurants = filterRestaurant(
        { restaurants, filterText: '', filterCategory: '일식' },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });
});
