import { calcTotalPrice } from './cart';
import { foods } from '../../fixtures';

describe('calcTotalPrice', () => {
  it('returns sum of all food price', () => {
    const result = calcTotalPrice(foods);

    expect(result).toBe(13_000);
  });
});
