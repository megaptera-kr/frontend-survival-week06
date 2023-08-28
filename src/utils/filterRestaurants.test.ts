import fixtures from '../../fixtures';
import filterRestaurants from './filterRestaurants';

const context = describe;

describe('util filterRestaurants', () => {
  const { restaurants } = fixtures;

  context('input filter text', () => {
    it('Render matching results', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        'Restaurant-0',
        '전체',
      );

      expect(filteredRestaurants).toHaveLength(2);
    });
  });

  context('input filter category', () => {
    const filteredRestaurants = filterRestaurants(
      restaurants,
      '',
      'Category-01',
    );

    expect(filteredRestaurants).toHaveLength(2);
  });

  context('input filter text and category', () => {
    const filteredRestaurants = filterRestaurants(
      restaurants,
      'Restaurant-1',
      'Category-02',
    );

    expect(filteredRestaurants).toHaveLength(1);
  });
});
