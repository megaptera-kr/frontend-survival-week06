import context from './test_config';

import { Categories } from '../types';

export default function checkCategoryType(value: string): value is Categories {
  return ['전체', '중식', '한식', '일식'].includes(value);
}

describe('카테고리 체크', () => {
  context('checkCategoryType()', () => {
    it.each([
      ['전체', true],
      ['중식', true],
      ['한식', true],
      ['일식', true],
      ['장식', false],
    ])('checkCategoryType(%s, %s) returns %s', (first, expected) => {
      expect(checkCategoryType(first)).toBe(expected);
    });
  });
});
