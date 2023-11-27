import context from './test_config';

import restaurants from '../../../fixtures/restaurants';

function filterBySearchQuery<T extends { name: string }>(
  list: T[],
  searchText: string,
): T[] {
  return list.filter((item) => item.name.includes(searchText.trim()));
}

describe('메뉴판 필터링', () => {
  context('filterBySearchQuery()', () => {
    it.each([
      [filterBySearchQuery([...restaurants], '메가'), 2],
      [filterBySearchQuery([...restaurants], '감감'), 0],
    ])('filterBySearchQuery(%s, %s) returns %s', (params, expected) => {
      expect(params.length).toBe(expected);
    });
  });
});
