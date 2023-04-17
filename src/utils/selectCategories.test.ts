import fixtures from '../../fixtures';
import selectCategory from './selectCategory';

describe('selectCategory', () => {
  it('returns categories from restaurants', () => {
    const { restaurants } = fixtures;
    const categories = selectCategory(restaurants);
    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
