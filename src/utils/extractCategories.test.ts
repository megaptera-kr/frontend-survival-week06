import fixtures from '../../fixtures';
import extractCategories from './extractCategories';

describe('extractCategories', () => {
  it('get category list', () => {
    const { restaurants } = fixtures;
    const result = ['한식', '중식', '일식'];
    expect(extractCategories(restaurants)).toHaveLength(result.length);
    expect(extractCategories(restaurants)).toContain(result[0]);
    expect(extractCategories(restaurants)).toContain(result[1]);
    expect(extractCategories(restaurants)).toContain(result[2]);
  });
});
