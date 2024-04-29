import fixture from '../../../fixtures';
import getTotalPrice from './getTotalPrice';

const context = describe;

describe('getTotalPrice func', () => {
  const { menu } = fixture.restaurants[0];

  context('menu를 전달하면', () => {
    it('모든 메뉴의 총합계를 반환한다.', () => {
      expect(getTotalPrice(menu)).toBe(30_000);
    });
  });
});
