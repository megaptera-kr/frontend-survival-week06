import filterRestaurant from './filterRestaurant';

import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('filterRestaurant', () => {
  context('without filter text', () => {
    it('renders filtered restaurant', () => {
      const filterText = '테라김밥';

      const filteredRestaurants = filterRestaurant(restaurants, filterText);

      expect(filteredRestaurants.length).toBe(0);
    });
  });

  context('with filter text', () => {
    it('renders filtered restaurant', () => {
      const filterText = '메리김밥';

      const filteredRestaurants = filterRestaurant(restaurants, filterText);

      const filteredRestaurant = filteredRestaurants[0];

      expect(filteredRestaurants.length).toBe(1);
      expect(filteredRestaurant.name).toBe(filterText);
    });
  });
});
