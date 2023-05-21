import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';
import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants ', () => {
  const restaurants = useFetchRestaurant();
  context('when filter by category', () => {
    it('has no category', () => {
      const checkRestaurants = filterRestaurants(restaurants, {
        text: '',
        category: '',
      });

      expect(checkRestaurants.length).toBe(3);
    });
    it('has a category by 한식', () => {
      const checkRestaurants = filterRestaurants(restaurants, {
        text: '',
        category: '한식',
      });

      expect(checkRestaurants.length).toBe(2);
    });

    it('has a category by 중식', () => {
      const checkRestaurants = filterRestaurants(restaurants, {
        text: '',
        category: '중식',
      });

      expect(checkRestaurants.length).toBe(1);
    });
  });

  context('when filter by text', () => {
    it('has text by 메', () => {
      const checkRestaurants = filterRestaurants(restaurants, {
        text: '메',
        category: '',
      });

      expect(checkRestaurants.length).toBe(2);
    });

    it('has text by 데', () => {
      const checkRestaurants = filterRestaurants(restaurants, {
        text: '데',
        category: '',
      });

      expect(checkRestaurants.length).toBe(1);
    });
  });
});
