import filterRestaurant from './filterRestaurant';

import fixtures from '../../fixtures';

describe('filterRestaurant', () => {
  const { restaurants } = fixtures;

  const defaultConditions = {
    query: '',
    category: '전체',
  };

  it('Filtering condition is an default value', () => {
    const filteredRestaurants = filterRestaurant(restaurants, defaultConditions);
    expect(filteredRestaurants).toEqual(restaurants);
  });

  it('When restaurants is empty', () => {
    const filteredRestaurants = filterRestaurant([], defaultConditions);
    expect(filteredRestaurants).toEqual([]);
  });

  it('When the user enters a category and text', () => {
    const filteredRestaurants = filterRestaurant(restaurants, { query: '메가', category: '중식' });
    const expectedResult = [restaurants[0]];
    expect(filteredRestaurants).toEqual(expectedResult);
  });
});
