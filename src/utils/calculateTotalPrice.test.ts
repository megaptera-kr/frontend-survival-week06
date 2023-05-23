import fixtures from '../../fixtures';
import calculateTotalPrice from './calculateTotalPrice';

const context = describe;

describe('total price', () => {
  const { foods } = fixtures;

  context('with one cart item', () => {
    it('returns item price', () => {
      calculateTotalPrice(foods);

      expect(13_000);
    });
  });
});
