import fixtures from '../../fixtures';
import filterRestaurants from './filterRestaurants';

describe('filterRestaurants', () => {
  it('return filtered restaurants by name', () => {
    const { restaurants } = fixtures;
    const result = filterRestaurants(restaurants, { filterText: '메', filterCategory: '한식' });
    const filteredValue = [
      {
        id: 'RESTAURANT_02',
        category: '한식',
        name: '메리김밥',
        menu: [
          {
            id: 'FOOD_03',
            name: '김밥',
            price: 3_000,
          },
        ],
      },
    ];
    expect(result).toEqual(filteredValue);
  });
});
